const SheetSolicitudes = SpreadsheetApp.openById(
  "1WkUUbMCUQqZJD68EM-zfrldj6agR7RYWkiqhimq59Bo"
).getSheetByName("Solicitudes");

const SheetAdministracion = SpreadsheetApp.openById(
  "1WkUUbMCUQqZJD68EM-zfrldj6agR7RYWkiqhimq59Bo"
).getSheetByName("Administracion");

const dataAdmin = SheetAdministracion.getDataRange().getValues();
const user = Session.getActiveUser().getEmail();
