function EnviarCorreo(data) {
  const hoja = SheetAdministracion.getDataRange().getValues();
  let filtro = "";
  let correos = "";
  if (data[5] == "Vicepresidencia") {
    filtro = hoja.filter((hoja) => hoja[0] == "Vicepresidencia");
    correos = filtro.map((correo) => correo[1]);
  } else {
    if (data[5] == "Gerencia") {
      filtro = hoja.filter((hoja) => hoja[0] == "Gerencia");
      correos = filtro.map((correo) => correo[1]);
    }
  }

  const output = HtmlService.createTemplateFromFile("PlantillaCorreos/Correo1");
  output.cosa1 = data[5];
  output.cosa2 = data[0];
  output.cosa3 = "y otro mas";
  var html = output.evaluate().getContent();

  MailApp.sendEmail({
    to: correos.toString(),
    subject: "Envio de correo",
    htmlBody: html,
  });
}
