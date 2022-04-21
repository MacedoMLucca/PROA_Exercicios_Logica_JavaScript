function comissao_3_e_5(){

    let SalFixo, ValVendas,comissao,SalFinal;
    
    SalFixo=parseInt(prompt("Digite seu salario fixo: "));
    ValVendas=parseInt(prompt("Digite o valor das vendas: "));
    
    if (ValVendas <= 1500) {
        comissao = ValVendas * 0.03;
        SalFinal= SalFixo + comissao;
        document.getElementById("resposta").innerHTML='Seu salario será: '+ SalFinal;
    } else {
        comissao = ValVendas * 0.05;
        SalFinal= SalFixo + comissao;
        document.getElementById("resposta").innerHTML='Seu salario será: '+ SalFinal;
    }

}