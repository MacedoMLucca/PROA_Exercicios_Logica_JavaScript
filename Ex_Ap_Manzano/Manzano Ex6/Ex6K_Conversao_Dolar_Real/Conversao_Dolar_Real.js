function Conversao_Dolar_Real(){
    
    let dolar = parseInt(prompt('Digite o valor que voce possue em dolares: '));
    let cotacao = parseInt(prompt('Digite a coitação atual: '));

    let resul = dolar * cotacao;

    document.getElementById("resposta").innerHTML='Em reias voce teria aproximadamente: ' + resul.toFixed(2) + ' reais';
}
