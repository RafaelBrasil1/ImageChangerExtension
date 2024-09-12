if(localStorage.url == undefined){
localStorage.url = "https://ninocarvalho.wordpress.com/wp-content/uploads/2006/12/kalat_pixo-007.jpg"
}

if(localStorage.changeImages == undefined){
    localStorage.changeImages = 'false';
}

if(localStorage.changeAll == undefined){
localStorage.changeAll = 'false';
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {

    if (request.tipo === 'dados') {

        console.log('Recebido do background script:', request.conteudo);

        if (request.conteudo == 'Itrue') {
        localStorage.changeImages = 'true';

        } else if(request.conteudo == 'Ifalse') {
            localStorage.changeImages = 'false';
            location.reload()

        

        } else if(request.conteudo == 'Afalse') {
            localStorage.changeAll = 'false';
            location.reload()
        }

        else if(request.conteudo == 'Atrue'){
            localStorage.changeAll = 'true'
            
        }

        else {
            localStorage.url = request.conteudo
        }

    
    }


});






setInterval( () => {
console.log('aaaa')
if(JSON.parse(localStorage.changeImages)){
    let Imgelements = document.querySelectorAll('img');

    for (i = 0; i < Imgelements.length - 1; i++) {
        Imgelements[i].src = localStorage.url;
    }
}

if(JSON.parse(localStorage.changeAll)){

    let Allelements = document.querySelectorAll('*');

    for (i = 0; i < Allelements.length - 1; i++) {
        let x = document.createElement("img")
        x.src = localStorage.url;
        Allelements[i].appendChild(x);
    }

    
}


},10)





