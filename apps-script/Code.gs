/**
 * DIVINE Solutions — Contact Form → Google Sheet
 *
 * SETUP:
 * 1. Create a new Google Sheet. Rename the first sheet tab to "Submissions"
 *    (or change SHEET_NAME below to match whatever you name it).
 * 2. In that Sheet, go to Extensions → Apps Script.
 * 3. Delete any starter code in Code.gs and paste this entire file in its place.
 * 4. Click Deploy → New deployment → select type "Web app".
 *    - Description: anything (e.g. "Contact form endpoint")
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 5. Click Deploy, authorize the permissions Google asks for, then copy the
 *    "Web app URL" it gives you (it will look like
 *    https://script.google.com/macros/s/XXXXXXXX/exec).
 * 6. Paste that URL into FORM_ENDPOINT in src/pages/Contact.tsx.
 *
 * Every form submission will be appended as a new row in the Sheet with
 * columns: Timestamp | Name | Email | Project Type | Message.
 */

const SHEET_NAME = "Submissions";

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName(SHEET_NAME);
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
    }

    // Add header row if the sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Timestamp", "Name", "Email", "Project Type", "Message"]);
    }

    sheet.appendRow([
      data.submitted_at || new Date().toISOString(),
      data.name || "",
      data.email || "",
      data.project_type || "",
      data.message || "",
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ result: "success" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: "error", error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
