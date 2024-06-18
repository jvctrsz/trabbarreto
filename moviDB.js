const getLocalStorageMovi= () => JSON.parse(localStorage.getItem('db_moviment')) ?? []
const setLocalStorageMovi = (dbMovimento) => localStorage.setItem('db_moviment', JSON.stringify(dbMovimento))


//CREATE
const criarMoviment = (moviment) => {
    const dbMovimento = getLocalStorageMovi()
    dbMovimento.push(moviment)
    setLocalStorageMovi(dbMovimento)
}

//READ

const lerMovimento = () => getLocalStorageMovi()

//UPDATE

const alterarMovimento = (index, moviment) => {
    const dbMovimento = lerMovimento()
    dbMovimento[index] = moviment
    setLocalStorageMovi(dbMovimento)
}


//DELETE
const deletarMovimento = (index) => {
    const dbMovimento = lerMovimento()
    dbMovimento.splice(index,1)
    setLocalStorageMovi(dbMovimento)
}

// const isValid = () => {
//     return document.querySelector('#formMovi').reportValidity()
// }

const limparInputMovi = () => {
    const inputs = document.querySelectorAll('.inputsMov')
    inputs.forEach(inputs => inputs.value = '')
}

const salvarMovimento = () =>{
        const moviment = {
            codProd:document.querySelector('#codMov').value,
            nomeMov:document.querySelector('#nomeMov').value,
            tipoMov:document.querySelector('#tipoMov').value,
            quantidadeMov:document.querySelector('#quantMov').value
        }
        criarMoviment(moviment)
        limparInputMovi()
        atualizarTabela()
        fecharMov()
}

const criarLinhasMov = (moviment, index) => {
    const newLinha = document.createElement('div')
    newLinha.innerHTML = `
        <div class="code">${index + 1}</div>
        <div class="code">${moviment.codProd}}</div>
        <div class="name">${moviment.nomeMov}</div>
        <div class="type">${moviment.tipoMov}</div>
        <div class="amount">${moviment.quantidadeMov}</div>
        <div class="date">DATA</div>
        <button class="alterar">Editar</button>
        <button class="deletar"deletar">Deletar</button>
    `
    document.querySelector('#tableMov').appendChild(newLinha)
}

const limparTabela = () => {
    const linhas = document.querySelectorAll('#tableMov > div')
    linhas.forEach(linha => linha.parentNode.removeChild(linha))
}

const atualizarTabela = () => {
    const dbMovimento = lerMovimento()
    limparTabela()
    dbMovimento.forEach(criarLinhasMov)
}

document.getElementById('enviar-mov').addEventListener('click', salvarMovimento)

// document.querySelector('#tableMov').addEventListener('click',editarDeletar)
