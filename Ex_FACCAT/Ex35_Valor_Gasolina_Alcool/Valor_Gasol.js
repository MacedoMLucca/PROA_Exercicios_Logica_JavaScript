function Valor_Gasol(){

    let a,g, combustivel,qtd, valPago;
    
    combustivel=prompt("Tipo de combustivel, a para alcool e g para gasolina: ");
    qtd=parseInt(prompt('Quantidade de combustivel(alcool) em litos:'));
    
    if (combustivel == 'a') {
        
        if (qtd<=20) {
            valPago = (29/10)*qtd - (qtd*3/10);
            document.getElementById("resposta").innerHTML='Valor a pagar R$' + valPago;
        } else {
            valPago = (29/10)*qtd - (qtd*5/10);
            document.getElementById("resposta").innerHTML='Valor a pagar R$' + valPago;
        }
    } else {
        if (qtd <=20) {
            valPago = (33/10)*qtd - (qtd*4/10);
            document.getElementById("resposta").innerHTML='Valor a pagar R$' + valPago;
        } else {
            valPago = (33/10)*qtd - (qtd*6/10)
            document.getElementById("resposta").innerHTML='Valor a pagar R$' + valPago;
        }
        
    }

}