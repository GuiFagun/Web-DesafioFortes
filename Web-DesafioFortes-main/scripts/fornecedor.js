function inserirfornecedor(){
    const tabela = document.getElementById("tabela");
    const novalinha = document.createElement('tr');

    const fornecedor = prompt("Insira o nome fornecedor.");
    const colunafornecedor= document.createElement('td');
    colunafornecedor.innerText = fornecedor;
    novalinha.appendChild(colunafornecedor);
    tabela.appendChild(novalinha);

    const localentrega = prompt("Insira o local de entrega do fornecedor.");
    const colunaentrega = document.createElement('td');
    colunaentrega.innerText = localentrega;
    novalinha.append(colunaentrega);
    tabela.appendChild(novalinha)

    const telefone = prompt("Insira o telefone do fornecedor.");
    const colunatelefone = document.createElement('td');
    colunatelefone.innerText = telefone;
    novalinha.append(colunatelefone);
    tabela.appendChild(novalinha);  
    
    const valor = parseFloat(prompt("Insira o valor cobrado por cada refeição."));
    const colunavalor = document.createElement('td');
    colunavalor.innerText = valor;
    novalinha.append(colunavalor);
    tabela.appendChild(novalinha);

    alert("Um novo fornecedor foi inserido.")
}