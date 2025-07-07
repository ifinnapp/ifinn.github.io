function doGet(e) {
  const sheetName = e.parameter.sheetName; 
  if (!sheetName) {
    return ContentService.createTextOutput("Sheet name is required").setMimeType(ContentService.MimeType.TEXT);
  }

  const sheet = SpreadsheetApp.openById("1gSW88wYuMXMwJ_e880o8JQ0O1inllTYdYHTYoyazlTk").getSheetByName(sheetName);
  
  if (!sheet) {
    return ContentService.createTextOutput("Sheet not found").setMimeType(ContentService.MimeType.TEXT);
  }

  const data = sheet.getDataRange().getDisplayValues();
  const result = [];

  for (var i = 1; i < data.length; i++) {
    const row = data[i];
    const rowData = {};

    for (var j = 0; j < row.length; j++) {
      rowData['column' + (j+1)] = row[j];
    }

    result.push(rowData);
  }

  const jsonResponse = ContentService.createTextOutput(JSON.stringify(result));
  jsonResponse.setMimeType(ContentService.MimeType.JSON);

  return jsonResponse;
}
