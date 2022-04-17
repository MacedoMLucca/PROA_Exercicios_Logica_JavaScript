function Reajuste_Salario(){

    let salAtual, PorRaejuste,valRea, salFinal,valReajuste;

    salAtual=parseInt(prompt("Escreva seu salario mensal:"));
    PorRaejuste=parseInt(prompt("Escreva somente o numero da procentagem de reajuste: "));
    
    valReajuste = PorRaejuste/100;
    valRea = valReajuste*salAtual;
    salFinal = salAtual + valRea;

    document.getElementById("resposta").innerHTML='Com um reajuste de '+valRea+ ' reais seu salario passara a ser de ' + salFinal+' reais ';

}
