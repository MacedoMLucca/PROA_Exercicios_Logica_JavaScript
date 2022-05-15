function Conversao_Real_dolar(){
    
    
    let reais = parseInt(prompt('Digite o valor que voce possue em Reais: '));
    let cotacao = parseInt(prompt('Digite a coitação atual: '));
    
    let resul = reais/cotacao;
    
    document.getElementById("resposta").innerHTML='m reias voce teria aproximadamente: ' + resul.toFixed(2) + ' dolares';
}
