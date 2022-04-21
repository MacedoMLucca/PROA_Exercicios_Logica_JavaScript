function Maior_numeros(){


    let num1, num2;
    num1=parseInt(prompt("Digite o primeiro valor: "));
    num2=parseInt(prompt("Digite o segundo valor: "));
    
    if (num1 > num2) {
        document.getElementById("resposta").innerHTML='O maior numero é: '+ num1;    
    } else {
        document.getElementById("resposta").innerHTML='O maior numero é: '+ num2;
    }
    

}