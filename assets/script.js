let loginId = document.querySelector('#loginD')
let homePage = document.querySelector('#homePage')
let background = document.querySelector('#background')
let backProd = document.querySelector('.background-produtos')
let backMovi = document.querySelector('.background-movimentacao')
let incluirprod = document.querySelector('#incluirProd')
let incluirmov = document.querySelector('#incluirMov')
let fecharprod = document.querySelector('#fechar-prod')
let fecharmov = document.querySelector('#fechar-mov')
let backRel = document.querySelector('.background-relatorio')
let relatorioBox = document.querySelector('.relatorio')
let tabelaRel = document.querySelector('.tabelaRelBackground')
let prodBtn = document.querySelector('#prodBtn')

function activeCheck() {
    let activeElement = document.querySelector('.active');
    if (activeElement) {
        activeElement.classList.remove("active");
    }
}

function produtos(){
    activeCheck()
    atualizarTable()
    backProd.classList.add("active")
}

function movimentacao(){
    activeCheck()
    atualizarTabela()
    backMovi.classList.add('active')
}

function relatorio(){
    activeCheck()
    backRel.classList.add('active')
    relatorioBox.classList.remove('desactive')
}

function produtosRel() {
    relatorioBox.classList.add('desactive')
    tabelaRel.classList.add('active')
}

function movimentoRel(){
    relatorioBox.classList.add('desactive')
    tabelaRel.classList.add('active')
}

function todosRel(){
    relatorioBox.classList.add('desactive')
    tabelaRel.classList.add('active')
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
    limparInputMovi()
}

