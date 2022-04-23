function Salario_vendedor(){
    let quantidadeCarrosVendidos,totalVendas, salarioFixo, valorCarroVendido, comissaoFixa, comissaoVariavel,salarioFinal;

    quantidadeCarrosVendidos=parseInt(prompt("Digite a quantidade de carros vendidos por você:"));
    totalVendas=parseInt(prompt("Digite o valor total de suas vendas:"));
    salarioFixo=parseInt(prompt("Digite o seu salário fixo:"));
    valorCarroVendido=parseInt(prompt("Digite o valor recebido por cada carro vendido:"));
   
    
    comissaoFixa = quantidadeCarrosVendidos*valorCarroVendido 
    comissaoVariavel = totalVendas*5/100 
    salarioFinal = salarioFixo + comissaoFixa + comissaoVariavel 

    
    document.getElementById("resposta").innerHTML='O salário final corresponde a: R$'+salarioFinal;

}
