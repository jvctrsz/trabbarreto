let loginId = document.querySelector('#loginD')
let homePage = document.querySelector('#homePage')
let background = document.querySelector('#background')
let backProd = document.querySelector('.background-produtos')
let backMovi = document.querySelector('.background-movimentacao')
let incluirprod = document.querySelector('#incluirProd')
let incluirmov = document.querySelector('#incluirMov')
let fecharprod = document.querySelector('#fechar-prod')
let fecharmov = document.querySelector('#fechar-mov')

function activeCheck() {
    let activeElement = document.querySelector('.active');
    if (activeElement) {
        activeElement.classList.remove("active");
    }
}

function produtos(){
    activeCheck()
    backProd.classList.add("active")
}

function movimentacao(){
    backMovi.classList.add('active')
    activeCheck()
}

function login(){
    let loginUser = document.querySelector('#loginUser').value
    let senhaUser = document.querySelector('#senhaUser').value
    let mensageSenha = document.querySelector('#loginMensage')
    if(loginUser == 'joao' && senhaUser === '6593'){
        loginId.classList.remove("active")
        homePage.classList.add("activeHome")
        background.classList.add("active")
    } else{
        mensageSenha.textContent = 'Usuario ou senha incorreto, por favor tente novamente'
    }

}

function incluirProd(){
    incluirprod.classList.add('incluirAct')
}

function incluirMov(){
    incluirmov.classList.add('incluirAct')
}

function fecharProd(){
    incluirprod.classList.remove('incluirAct')
    limparInput()
}

function fecharMov(){
    incluirmov.classList.remove('incluirAct')
}

