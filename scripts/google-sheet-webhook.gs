/**
 * Google Apps Script — leads webhook receiver for Edutech Solutions.
 *
 * Paste this into a Google Sheet via Extensions → Apps Script.
 * Then Deploy → New deployment → Web app → "Anyone" → copy the URL.
 * Drop that URL into LEAD_WEBHOOK_URL in .env.local (and your production env).
 *
 * Each POST from /api/lead lands as a new row in the "Leads" tab.
 */

var SHEET_NAME = "Leads";

var COLUMNS = [
  { header: "Received At (IST)", key: "receivedAt" },
  { header: "Name", key: "name" },
  { header: "Phone", key: "phone" },
  { header: "Email", key: "email" },
  { header: "State", key: "state" },
  { header: "Programme", key: "program" },
  { header: "University", key: "university" },
  { header: "Source URL", key: "source" },
  { header: "User Agent", key: "userAgent" },
  { header: "Level (UG/PG)", key: "programLevel" },
  { header: "Specialization list shown", key: "specializationInterest" }
];

function doPost(e) {
  try {
    var payload = JSON.parse(e.postData.contents || "{}");
    var sheet = getOrCreateSheet();
    var row = COLUMNS.map(function (c) {
      var v = payload[c.key];
      return v === undefined || v === null ? "" : String(v);
    });
    sheet.appendRow(row);
    return jsonResponse({ ok: true });
  } catch (err) {
    return jsonResponse({ ok: false, error: String(err) }, 500);
  }
}

function doGet() {
  return jsonResponse({
    ok: true,
    message: "Edutech leads webhook is live. POST JSON to append a row."
  });
}

function getOrCreateSheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
  }
  if (sheet.getLastRow() === 0) {
    var headers = COLUMNS.map(function (c) { return c.header; });
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    sheet.getRange(1, 1, 1, headers.length)
      .setFontWeight("bold")
      .setBackground("#0f3d2e")
      .setFontColor("#ffffff");
    sheet.setFrozenRows(1);
    sheet.autoResizeColumns(1, headers.length);
  }
  return sheet;
}

function jsonResponse(obj, status) {
  var out = ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
  return out;
}
