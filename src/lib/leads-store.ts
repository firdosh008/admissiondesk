import fs from "node:fs/promises";
import path from "node:path";
import ExcelJS from "exceljs";

export type LeadRecord = {
  receivedAt: string;
  name: string;
  phone: string;
  email: string;
  state: string;
  program: string;
  university: string;
  programLevel: string;
  specializationInterest: string;
  source: string;
  userAgent: string;
};

const COLUMNS: Array<{
  header: string;
  key: keyof LeadRecord;
  width: number;
}> = [
  { header: "Received At (IST)", key: "receivedAt", width: 22 },
  { header: "Name", key: "name", width: 22 },
  { header: "Phone", key: "phone", width: 18 },
  { header: "Email", key: "email", width: 28 },
  { header: "State", key: "state", width: 18 },
  { header: "Programme", key: "program", width: 36 },
  { header: "University", key: "university", width: 24 },
  { header: "Source URL", key: "source", width: 40 },
  { header: "User Agent", key: "userAgent", width: 50 },
  { header: "Level (UG/PG)", key: "programLevel", width: 14 },
  {
    header: "Specialization list shown",
    key: "specializationInterest",
    width: 22,
  },
];

const SHEET_NAME = "Leads";
const DATA_DIR = path.join(process.cwd(), "data");
const FILE_PATH = path.join(DATA_DIR, "leads.xlsx");

let writeQueue: Promise<void> = Promise.resolve();

async function ensureWorkbook(): Promise<ExcelJS.Workbook> {
  await fs.mkdir(DATA_DIR, { recursive: true });
  const workbook = new ExcelJS.Workbook();
  workbook.creator = "admissiondesk";
  workbook.created = new Date();

  try {
    await fs.access(FILE_PATH);
    await workbook.xlsx.readFile(FILE_PATH);
    const existing = workbook.getWorksheet(SHEET_NAME);
    if (existing) {
      // readFile preserves header text but discards the column key mapping;
      // restore it so subsequent addRow({...}) calls write to the right cells.
      const keyByHeader = new Map(COLUMNS.map((c) => [c.header, c]));
      existing.columns = (existing.columns ?? []).map((col, i) => {
        const headerCell = existing.getRow(1).getCell(i + 1).value;
        const headerText =
          typeof headerCell === "string" ? headerCell : COLUMNS[i]?.header;
        const meta = (headerText && keyByHeader.get(headerText)) || COLUMNS[i];
        return {
          header: meta?.header ?? col.header,
          key: meta?.key ?? col.key,
          width: meta?.width ?? col.width,
        };
      });
    } else {
      seedWorksheet(workbook);
    }
  } catch {
    seedWorksheet(workbook);
  }

  return workbook;
}

function seedWorksheet(workbook: ExcelJS.Workbook) {
  const sheet = workbook.addWorksheet(SHEET_NAME, {
    views: [{ state: "frozen", ySplit: 1 }],
  });
  sheet.columns = COLUMNS.map((c) => ({
    header: c.header,
    key: c.key,
    width: c.width,
  }));
  const header = sheet.getRow(1);
  header.font = { bold: true, color: { argb: "FFFFFFFF" } };
  header.alignment = { vertical: "middle", horizontal: "left" };
  header.fill = {
    type: "pattern",
    pattern: "solid",
    fgColor: { argb: "FF0F3D2E" },
  };
  header.height = 22;
  sheet.autoFilter = {
    from: { row: 1, column: 1 },
    to: { row: 1, column: COLUMNS.length },
  };
}

export async function appendLead(record: LeadRecord): Promise<void> {
  writeQueue = writeQueue.then(async () => {
    const workbook = await ensureWorkbook();
    const sheet =
      workbook.getWorksheet(SHEET_NAME) ?? workbook.addWorksheet(SHEET_NAME);

    sheet.addRow(record);
    await workbook.xlsx.writeFile(FILE_PATH);
  });

  await writeQueue;
}

export async function readLeadsFile(): Promise<Buffer> {
  await ensureWorkbook();
  return fs.readFile(FILE_PATH);
}

export const LEADS_FILE_PATH = FILE_PATH;
