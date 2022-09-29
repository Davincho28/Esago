function CrearTriggerFormulario() {
  const form = FormApp.openById("1gyurFSidE3q8dQHfotKF3GyOHRETvx8sSPWnCynPcDk");
  ScriptApp.newTrigger("ObtenerFormulario")
    .forForm(form)
    .onFormSubmit()
    .create();
}

function ObtenerFormulario(e) {
  let respt = [];
  const itemResponses = e.response.getItemResponses();
  for (let i = 0; i < itemResponses.length; i++) {
    let itemResponse = itemResponses[i];
    respt[i] = itemResponse.getResponse();
  }
  GuardarSheet(respt);
  EnviarCorreo(respt);
}

function GuardarSheet(Data) {
  const ss = SpreadsheetApp.openById(
    "1WkUUbMCUQqZJD68EM-zfrldj6agR7RYWkiqhimq59Bo"
  ).getSheetByName("Solicitudes");
  const datos = ss.getDataRange().getValues();
  ss.appendRow(Data);
}
