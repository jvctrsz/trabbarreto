let loginId = document.querySelector('#loginD')
let homePage = document.querySelector('#homePage')
let background = document.querySelector('.section-display')
let backProd = document.querySelector('.background-produtos')
let backMovi = document.querySelector('.background-movimentacao')


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
    loginId.classList.remove("active")
    homePage.classList.add("activeHome")
}