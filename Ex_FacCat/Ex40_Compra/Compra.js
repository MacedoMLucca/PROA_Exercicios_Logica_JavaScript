function Compra(){

    let desconto;

    let nomeProduto=prompt("Digite o nome do produto: ");
    let qtdProduto=parseInt(prompt("Digite a quantidade do produto: "));
    let precoUni=parseInt(prompt("Digite preço unitario: "));
    
    let total = qtdProduto * precoUni;
    
    if (qtdProduto <= 5) {
        desconto = total- (total* 2/100)
    } else if (qtdProduto > 5 && qtdProduto <= 10) {
        desconto = total- (total* 3/100)
    }else if (qtdProduto > 10) {
        desconto = total- (total* 5/100)
    }
    
    totPagar = total - desconto
    document.getElementById("resposta").innerHTML='O produto "'+nomeProduto+'" vai sair por: R$'+desconto.toFixed(2)+' , ja com desconto';

}