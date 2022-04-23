function Custo_carro(){
    let CustoFab, CustoFim,valorImp;

    //73% pois sao 28% do distribuidos mais 45% de impostos federais
    valorImp = 0.73;
    CustoFab=parseInt(prompt("escreva o custo de fabrica: "));
    
    CustoFim = CustoFab + (CustoFab * valorImp);
    
    document.getElementById("resposta").innerHTML='O valor final do carro será de: '+ CustoFim;

}
