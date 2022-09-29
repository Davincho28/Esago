function DatosForm() {
  const ss = SpreadsheetApp.openById(
    "1WkUUbMCUQqZJD68EM-zfrldj6agR7RYWkiqhimq59Bo"
  ).getSheetByName("Solicitudes");
  const datos = ss.getDataRange().getValues();
  const objeto = convertirobjeto(datos);
  return objeto;
}

function convertirobjeto(data) {
  const header = data.shift();
  const resultado = data.map((row, indx) => {
    const reduced = header.reduce((accumulator, currentValue, currentIndex) => {
      accumulator[currentValue] = row[currentIndex].toString();
      return accumulator;
    }, {});

    reduced.row = indx + 2;
    return reduced;
  });

  return resultado;
}
