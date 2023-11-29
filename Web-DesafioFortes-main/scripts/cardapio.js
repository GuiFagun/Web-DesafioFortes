function inserircardapio(){
    const tabela = document.getElementById("tabela");
    const novalinha = document.createElement('tr');

    const principal = prompt("Insira o prato principal.");
    const colunaprincipal= document.createElement('td');
    colunaprincipal.innerText = principal;
    novalinha.appendChild(colunaprincipal);
    tabela.appendChild(novalinha);

    const acompanhamento = prompt("Insira o acompanhamento.");
    const colunaacompnhamento = document.createElement('td');
    colunaacompnhamento.innerText = acompanhamento;
    novalinha.append(colunaacompnhamento);
    tabela.appendChild(novalinha)

    const tipoderefeicao = prompt("Insira o tipo de refeição.");
    const colunaatipo = document.createElement('td');
    colunaatipo.innerText = tipoderefeicao;
    novalinha.append(colunaatipo);
    tabela.appendChild(novalinha);
    
    const local = prompt("Insira o local da obra.");
    const colunalocal = document.createElement('td');
    colunalocal.innerText = local;
    novalinha.append(colunalocal);
    tabela.appendChild(novalinha);

    const data = prompt("Insira o data da refeição.");
    const colunadata = document.createElement('td');
    colunadata.innerText = data;
    novalinha.append(colunadata);
    tabela.appendChild(novalinha);

    const fornecedor = prompt("Insira o fornecedor.");
    const colunafornecedor = document.createElement('td');
    colunafornecedor.innerText = fornecedor;
    novalinha.append(colunafornecedor);
    tabela.appendChild(novalinha);


    alert("Uma nova refeição foi adicionada ao cardápio.");
}