function aprobando(aprobado, description, numident) {
  const data = SheetSolicitudes.getDataRange().getValues();
  const found = data.findIndex((element) => element[4] == numident);
  SheetSolicitudes.getRange(found + 1, 10).setValue(aprobado.toString());
  SheetSolicitudes.getRange(found + 1, 11).setValue(description.toString());
  return "Se han guardado los cambios";
}
