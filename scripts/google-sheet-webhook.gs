/**
 * Google Apps Script — leads webhook receiver for admissiondesk.
 *
 * Paste this into a Google Sheet via Extensions → Apps Script.
 * Deploy → New deployment → Web app → Execute as: Me → Who has access: Anyone
 * Copy the /exec URL into LEAD_WEBHOOK_URL in .env.local and production env.
 *
 * Each POST from /api/lead is written to:
 *   1. A per-university tab  (e.g. "Graphic Era", "Uttaranchal University")
 *   2. An "All Leads" master tab
 * Both tabs are auto-created with a header row on first use.
 */

var MASTER_SHEET = "All Leads";

var COLUMNS = [
  { header: "Received At (IST)",    key: "receivedAt" },
  { header: "Name",                 key: "name" },
  { header: "Phone",                key: "phone" },
  { header: "Email",                key: "email" },
  { header: "State",                key: "state" },
  { header: "University",           key: "university" },
  { header: "Programme",            key: "program" },
  { header: "Level (UG/PG)",        key: "programLevel" },
  { header: "Specialization?",      key: "specializationInterest" },
  { header: "Source URL",           key: "source" },
  { header: "User Agent",           key: "userAgent" }
];

// Colour per university tab — add more as needed.
var TAB_COLORS = {
  "Graphic Era":           "#282896",
  "Uttaranchal University":"#0f3d2e",
  "All Leads":             "#1a1a1a"
};

function doPost(e) {
  try {
    var payload = JSON.parse(e.postData.contents || "{}");

    var university = (payload.university || "Unknown").toString().trim();

    // Build the row values once.
    var row = COLUMNS.map(function(c) {
      var v = payload[c.key];
      return (v === undefined || v === null) ? "" : String(v);
    });

    // Write to per-university tab.
    var uniSheet = getOrCreateSheet(university);
    uniSheet.appendRow(row);

    // Write to master tab.
    var masterSheet = getOrCreateSheet(MASTER_SHEET);
    masterSheet.appendRow(row);

    return jsonResponse({ ok: true });
  } catch(err) {
    return jsonResponse({ ok: false, error: String(err) });
  }
}

function doGet() {
  return jsonResponse({ ok: true, message: "admissiondesk leads webhook is live. POST JSON to append a row." });
}

// Returns the named sheet, creating it (with headers + styling) if absent.
function getOrCreateSheet(name) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(name);

  if (!sheet) {
    sheet = ss.insertSheet(name);

    // Move new university tabs before the master tab so master stays last.
    if (name !== MASTER_SHEET) {
      var masterIndex = getMasterIndex(ss);
      if (masterIndex > -1) {
        ss.moveActiveSheet(masterIndex); // insert before master
      }
    }
  }

  // Add header row if the sheet is empty.
  if (sheet.getLastRow() === 0) {
    var headers = COLUMNS.map(function(c) { return c.header; });
    var headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange.setValues([headers]);

    var bgColor = TAB_COLORS[name] || "#333333";
    headerRange
      .setFontWeight("bold")
      .setBackground(bgColor)
      .setFontColor("#ffffff");

    sheet.setFrozenRows(1);
    sheet.autoResizeColumns(1, headers.length);

    // Colour the tab itself.
    sheet.setTabColor(bgColor);
  }

  return sheet;
}

function getMasterIndex(ss) {
  var sheets = ss.getSheets();
  for (var i = 0; i < sheets.length; i++) {
    if (sheets[i].getName() === MASTER_SHEET) return i + 1;
  }
  return -1;
}

function jsonResponse(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
