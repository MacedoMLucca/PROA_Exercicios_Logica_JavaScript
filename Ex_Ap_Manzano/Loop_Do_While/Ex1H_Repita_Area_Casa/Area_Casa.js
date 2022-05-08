function Area_casa(){
    
    let area = 0;
    let vontade = '';
    let acumuladora =0;
    do{
        let comodo =parseInt(prompt('Qual comodo que deseja calcular'));        
        let largura =parseInt(prompt('Digite a largura:'));
        let comp =parseInt(prompt('Digite a comprimento:')); 
        area = largura * comp
        acumuladora = acumuladora + area;
        vontade = prompt('Deseja continuar??? (sim ou nao)');        
    
    }while (vontade == 'sim');
    document.getElementById('resposta').innerHTML = 'A area total dos comodos digitados é de '+acumuladora+' metros quadrado';
}
