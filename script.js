if(acao == 'deletar'){
  deletarLinha(db, dados.aba, dados.id);
  return ContentService.createTextOutput(JSON.stringify({status: 'ok'})).setMimeType(ContentService.MimeType.JSON);
}

function deletarLinha(db, aba, id){
  const sh = db.getSheetByName(aba.toUpperCase());
  const dados = sh.getDataRange().getValues();
  for(let i=1; i<dados.length; i++){
    if(dados[i][0] == id){
      sh.deleteRow(i+1);
      break;
    }
  }
}