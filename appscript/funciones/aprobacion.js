function aprobando(aprobado, description, numident) {
  let message = "";
  const data = SheetSolicitudes.getDataRange().getValues();
  const found = data.find((element) => element[4] == numident);
  const foundindex = data.findIndex((element) => element[4] == numident);
  if (found[9] == "") {
    SheetSolicitudes.getRange(foundindex + 1, 10).setValue(aprobado.toString());
    SheetSolicitudes.getRange(foundindex + 1, 11).setValue(
      description.toString()
    );
    message = "Se han guardado los cambios";
  } else {
    message = "Ya se Guardaron los datos";
  }

  return message;
}
