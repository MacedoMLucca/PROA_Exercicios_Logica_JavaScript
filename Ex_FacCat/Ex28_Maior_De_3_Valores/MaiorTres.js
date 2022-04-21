function MaiorTres(){

    let num1,num2,num3;

    num1=parseInt(prompt("Informe o primeiro numero: "));
    num2=parseInt(prompt("Informe o segundo numero: "));
    num3=parseInt(prompt("Informe o terceiro numero: "));
 
    if (num1 > num2 && num1 > num3){
        document.getElementById("resposta").innerHTML='O maior numero é '+ num1;
    } else if (num2 > num1 && num2 > num3) {
        document.getElementById("resposta").innerHTML='O maior numero é '+ num2;
    }else{
        document.getElementById("resposta").innerHTML='O maior numero é '+ num3;
    }
    
}