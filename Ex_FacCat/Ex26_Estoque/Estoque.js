function Estoque(){

    let Qtd_Md ,QtdEstoque, QtdMaxima, QtdMinima, QtdAtual;

    QtdEstoque=parseInt(prompt("Digite a quantidadede em estoque: "));
    QtdMaxima=parseInt(prompt("Digite a capacidade total do estoque: "));
    QtdMinima=parseInt(prompt("Digite a capacidade minima: "));
    
    Qtd_Md = ((QtdMaxima + QtdMinima)/2)
    
    if (QtdEstoque >= Qtd_Md) {
        document.getElementById("resposta").innerHTML='Não efetuar compra'
    } else {
        document.getElementById("resposta").innerHTML='Efetuar compra';
    }

}