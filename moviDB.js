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

const timeElapsed = Date.now();
const today = new Date(timeElapsed)
today.toLocaleDateString()


const salvarMovimento = () =>{
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed)
        const moviment = {
            codProd:document.querySelector('#codMov').value,
            nomeMov:document.querySelector('#nomeMov').value,
            tipoMov:document.querySelector('#tipoMov').value,
            quantidadeMov:document.querySelector('#quantMov').value,
            dataMov:today.toLocaleDateString()
        }
        criarMoviment(moviment)
        limparInputMovi()
        atualizarTabela()
        fecharMov()
}

const salvarRelMov = () =>{
    limparTableMov()
    atualizarTableMov()
}

const limparTableMov = () => {
    const linhas = document.querySelectorAll('#tabelaRel > div')
    linhas.forEach(linha => linha.parentNode.removeChild(linha))
}

const atualizarTableMov = () => {
    const dbMovimento = lerMovimento()
    limparTableMov()
    dbMovimento.forEach(criarRelMov)
}

const criarLinhasMov = (moviment, index) => {
    const newLinha = document.createElement('div')
    newLinha.innerHTML = `
        <div class="code">${index + 1}</div>
        <div class="code">${moviment.codProd}</div>
        <div class="name">${moviment.nomeMov}</div>
        <div class="type">${moviment.tipoMov}</div>
        <div class="amount">${moviment.quantidadeMov}</div>
        <div class="date">${moviment.dataMov}</div>
        <button class="alterar-off" id="editarMov"></button>
        <button class="deletar" id="deletarMov-${index}">Deletar</button>
    `
    document.querySelector('#tableMov').appendChild(newLinha)
}


const criarRelMov = (moviment, index) =>{
    const novaLinha = document.createElement('div')
    novaLinha.innerHTML = `
        <div class="code">${index + 1}</div>
        <div class="code">${moviment.codProd}</div>
        <div class="name">${moviment.nomeMov}</div>
        <div class="type">${moviment.tipoMov}</div>
        <div class="amount">${moviment.quantidadeMov}</div>
        <div class="date">${moviment.dataMov}</div>
`
    
    document.querySelector('#tabelaRel').appendChild(novaLinha)
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

const editarDeletarMov =(event) => {
    if(event.target.type == 'submit') {
        const [action,index] = event.target.id.split('-')
        console.log(action,index)
       if(action == 'deletarMov') {
        const moviment = lerMovimento()[index]
        const pergunta = confirm(`Você realmente quer deletar o produto (${moviment.nomeMov})`)
        if(pergunta){
            deletarMovimento(index)
            atualizarTabela()
        }
       }
    }
   
}

atualizarTabela()

document.getElementById('enviar-mov').addEventListener('click', salvarMovimento)

document.querySelector('#tableMov').addEventListener('click',editarDeletarMov)

document.querySelector('#movBtn').addEventListener('click',salvarRelMov)
