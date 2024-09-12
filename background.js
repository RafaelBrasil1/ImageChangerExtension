let imagesCkbx = document.getElementById("imgChange");
let allCkbx = document.getElementById("allChange");
let urlInput = document.getElementById("url");
if (localStorage.changeImage == undefined){
  localStorage.changeImage = JSON.stringify(false);
}
if (localStorage.changeAll == undefined){
  localStorage.changeAll = JSON.stringify(false);
}




imagesCkbx.checked = JSON.parse(localStorage.changeImage);
allCkbx.checked = JSON.parse(localStorage.changeAll);

setInterval( () =>{

  console.table({
    "changeImage": localStorage.changeImage,
    "changeAll": localStorage.changeAll
  })
},100)

function enviarMensagemParaContentScript(dado) {
  // Enviar mensagem para a aba ativa
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { tipo: 'dados', conteudo: dado });
  });
}



imagesCkbx.addEventListener('click', () => {
  if(imagesCkbx.checked){
    enviarMensagemParaContentScript('Itrue'); 
    localStorage.changeImage = "true";
  } 
  else {
    enviarMensagemParaContentScript('Ifalse'); 
    localStorage.changeImage = "false";
  }
});

allCkbx.addEventListener('click', () => {
  if(allCkbx.checked) {
    enviarMensagemParaContentScript('Atrue');
    localStorage.changeAll = 'true';
  }
  else {
    enviarMensagemParaContentScript('Afalse');
    localStorage.changeAll = 'false';
  }
  
});



urlInput.addEventListener('keypress', (e) => {
if(e.key == 'Enter'){
enviarMensagemParaContentScript(urlInput.value)
}
});
