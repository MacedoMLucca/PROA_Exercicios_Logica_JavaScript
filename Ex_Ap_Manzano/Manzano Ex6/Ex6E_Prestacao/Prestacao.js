function Prestacao(){
    
    let valor = parseInt(prompt('O valor da Parcela: '));
    let taxa = parseInt(prompt('Digite a taxa de Juros: '));
    let duracao = parseInt(prompt('Digite a duração dessa prestação: '));

    let prestacao = valor + (valor*(taxa/100)*duracao)

    document.getElementById("resposta").innerHTML='O valor da prestação sera de: ' + prestacao;
}
