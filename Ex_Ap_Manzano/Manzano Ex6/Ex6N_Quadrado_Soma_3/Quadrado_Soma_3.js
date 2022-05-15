function Quadrado_Soma_3(){
    
    let a = parseInt(prompt('Escreva o primeiro numero: '));
    let b = parseInt(prompt('Escreva o segundo numero: '));
    let c = parseInt(prompt('Escreva o terceiro numero: '));
    
    
    let soma = a + b + c;
    let total = soma * soma

    document.getElementById("resposta").innerHTML='O quadrado da soma dos tres valores é: '+ total;
}
