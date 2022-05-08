function Area_Casa(){
    
    let vontade ,acumuladora,comodo,area,largura,comp;

    acumuladora = 0
    
    while(vontade  != 'nao'){
        comodo = prompt("Qual comodo que deseja calcular");
        largura = parseInt(prompt("Informe a Largura: "));
        comp = parseInt(prompt("Informe a comprimento: "));
        area = largura * comp
        acumuladora = acumuladora + area
        vontade = prompt("Deseja continuar??? (sim ou nao)");
    }

    document.getElementById('resposta').innerHTML= 'A area total da dos comodos digitados é de '+ acumuladora +' metros quadrado'
}