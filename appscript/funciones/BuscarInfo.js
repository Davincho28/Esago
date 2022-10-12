function buscarnumiden(ident) {
  const data = SheetSolicitudes.getDataRange().getValues();
  let array = [];
  const mapeo = data.map((element) => {
    if (element[4] == ident) {
      array = element;
    }
  });
  return array.toString();
}

function buscarrango() {
  const found = dataAdmin.find((element) => user == element[1]);
  return found[0];
}
