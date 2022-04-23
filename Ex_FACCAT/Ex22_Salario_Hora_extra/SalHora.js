function SalHora(){
    let Htrab, Hextra, ValHora, Salario, AcresH, SalFinal;

    Htrab=parseInt(prompt("Digite quantas horas foram trabalhadas nesse mes: "));
    Hextra = Htrab-160;

    ValHora=parseInt(prompt("Digite o valor por hora trabalhada: "));
    Salario = 160*ValHora
    AcresH = ValHora * 50/100
    
    if (Hextra > 0) {
        SalFinal = Salario+(Hextra*(AcresH+ValHora));
        document.getElementById("resposta").innerHTML='O salario este mes sera de: R$'+SalFinal
    } else {
        document.getElementById("resposta").innerHTML='O salario este mes sera de: R$'+SalFinal
    }

}