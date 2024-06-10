
const getLocalStorage = () => JSON.parse(localStorage.getItem('db_produto')) ?? []
const setLocalStorage = (dbProduto) => localStorage.setItem('db_produto', JSON.stringify(dbProduto))

//delete

const deletarProduto = (index) => {
    const dbProduto = lerProduto()
    dbProduto.splice(index, 1)
    setLocalStorage(dbProduto)
}

//UPTADE
const alterarProduto = (index, produto) => {
    const dbProduto = lerProduto()
    dbProduto[index] = produto
    setLocalStorage(dbProduto)
}

//READ

const lerProduto = () => getLocalStorage()

//CREATE
const criarProduto = (produto) => {
    const dbProduto = getLocalStorage()
    dbProduto.push(produto)
    setLocalStorage(dbProduto)
}

const notNull = () => {
    return document.querySelector('#formProdutos').reportValidity()
}

const limparInput = () => {
    const inputs = document.querySelectorAll('.inputsProd')
    inputs.forEach(inputs => inputs.value = '')
}

const salvarProduto = () => {
    if (notNull()) {
        console.log('cadastrando')
        const produto = {
            nome: document.querySelector('#nomeProd').value,
            tipo: document.querySelector('#tipoProd').value,
            quantidade: document.querySelector('#quantProd').value
        }
        criarProduto(produto)
        limparInput()
        atualizarTable()
        fecharProd()
    }

}

const limparTable = () => {
    const linhas = document.querySelectorAll('#tableProd > div')
    linhas.forEach(linha => linha.parentNode.removeChild(linha))
    console.log(linhas)
}

const criarLinha = (produto) => {
    const novaLinha = document.createElement('div')
    novaLinha.innerHTML = `
     <div>
       <div class="code">0</div>
       <div class="name">${produto.nome}</div>
       <div class="type">${produto.tipo}</div>
      <div class="amount">${produto.quantidade}</div>
      <button class="alterar">Editar</button>
      <button class="deletar">Deletar</button>
    </div>`

    document.querySelector('#tableProd').appendChild(novaLinha)
}



atualizarTable = () => {
    const dbProduto = lerProduto()
    limparTable()
    dbProduto.forEach(criarLinha)
}

atualizarTable()


document.getElementById('enviar-prod').addEventListener('click', salvarProduto)