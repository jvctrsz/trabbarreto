
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
        const produto = {
            nome: document.querySelector('#nomeProd').value,
            tipo: document.querySelector('#tipoProd').value,
            quantidade: document.querySelector('#quantProd').value
        }
        const index = document.getElementById('nomeProd').dataset.index
        if(index == 'new'){
            criarProduto(produto)
            limparInput()
            atualizarTable()
            fecharProd()
        }else{
            alterarProduto(index,produto)
            atualizarTable()
            fecharProd()
        }
       
    }

}

const limparTable = () => {
    const linhas = document.querySelectorAll('#tableProd > div')
    linhas.forEach(linha => linha.parentNode.removeChild(linha))
}

const criarLinha = (produto, index) => {
    const novaLinha = document.createElement('div')
    novaLinha.innerHTML = `
       <div class="code">${index + 1}</div>
       <div class="name">${produto.nome}</div>
       <div class="type">${produto.tipo}</div>
      <div class="amount">${produto.quantidade}</div>
      <button class="alterar" id="editar-${index}">Editar</button>
      <button class="deletar" id="deletar-${index}"deletar">Deletar</button>
`

    document.querySelector('#tableProd').appendChild(novaLinha)
}



atualizarTable = () => {
    const dbProduto = lerProduto()
    limparTable()
    dbProduto.forEach(criarLinha)
}

const preencherCampos = (produto) =>{
    document.querySelector('#nomeProd').value = produto.nome
    document.querySelector('#tipoProd').value = produto.tipo
    document.querySelector('#quantProd').value = produto.quantidade
    document.querySelector('#nomeProd').dataset.index = produto.index
}

const editarProduto = (index) =>{
    const produto = lerProduto()[index]
    produto.index = index
    preencherCampos(produto)
    incluirProd()
}

const editarDeletar =(event) => {
    if(event.target.type == 'submit') {
        const [action,index] = event.target.id.split('-')
       if(action == 'editar') {
        editarProduto(index)
       } else{
        const produto = lerProduto()[index]
        const pergunta = confirm(`Você realmente quer deletar o produto (${produto.nome})`)
        if(pergunta){
            deletarProduto(index)
            atualizarTable()
        }
       }
    }
    
}

const pesquisarProduto = () =>{
    const search = document.querySelector('#searchProduto').value
    console.log(search)
    const produto = lerProduto()
    produto.forEach(linha => console.log(linha))
    // if(search == )
}

atualizarTable()


document.getElementById('enviar-prod').addEventListener('click', salvarProduto)

document.querySelector('.boxItens').addEventListener('click',editarDeletar)

document.querySelector('#searchBtn').addEventListener('click', pesquisarProduto)