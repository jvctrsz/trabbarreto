const salvarRelTodos = () =>{
    atualizarTableTodos()
}

const atualizarTableTodos = () => {
    const dbProduto = lerProduto()
    limparTableRel()
    dbProduto.forEach(criarRelProd)
    const dbMovimento = lerMovimento()
    dbMovimento.forEach(criarRelMov)
}

const criarRelTodos = (produto, moviment, index) =>{

    const novaLinhaProd = document.createElement('div')
    novaLinhaProd.innerHTML = `
       <div class="code">${index + 1}</div>
       <div class="name">${produto.nome}</div>
       <div class="type">${produto.tipo}</div>
      <div class="amount">${produto.quantidade}</div>
`

    const novaLinhaMov = document.createElement('div')
    novaLinhaMov.innerHTML = `
        <div class="code">${index + 1}</div>
        <div class="code">${moviment.codProd}</div>
        <div class="name">${moviment.nomeMov}</div>
        <div class="type">${moviment.tipoMov}</div>
        <div class="amount">${moviment.quantidadeMov}</div>
        <div class="date">${moviment.dataMov}</div>
`
    document.querySelector('#tabelaRel').appendChild(novaLinhaProd)
    document.querySelector('#tabelaRel').appendChild(novaDiv)
    document.querySelector('#tabelaRel').appendChild(novaLinhaMov)
}

document.querySelector('#todosBtn').addEventListener('click',salvarRelTodos)

