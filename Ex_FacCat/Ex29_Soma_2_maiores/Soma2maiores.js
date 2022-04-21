function Soma2maiores(){
    
    let num1,num2,num3;

    num1=parseInt(prompt("Informe o primeiro numero: "));
    num2=parseInt(prompt("Informe o segundo numero: "));
    num3=parseInt(prompt("Informe o terceiro numero: "));
    
    if (num1 > num2 && num1 > num3){
        if (num2 > num3){
            soma = num1 + num2
            document.getElementById("resposta").innerHTML='A soma dos dois maiores numeros é '+ soma;
        }else{
            soma = num1 + num3
            document.getElementById("resposta").innerHTML='A soma dos dois maiores numeros é '+ soma;

        } 
    }else if (num2 > num1 && num2 > num3) {
        if (num3 > num1){
            soma = num2 + num3
            document.getElementById("resposta").innerHTML='A soma dos dois maiores numeros é '+ soma;
        }else{
            soma = num2 + num1
            document.getElementById("resposta").innerHTML='A soma dos dois maiores numeros é '+ soma;

        }
    }else if (num3 > num1 && num3 > num2) {
        if (num1 > num2){
            soma = num3 + num1
            document.getElementById("resposta").innerHTML='A soma dos dois maiores numeros é '+ soma;

        }else{
            soma = num3 + num2
            document.getElementById("resposta").innerHTML='A soma dos dois maiores numeros é '+ soma;

        }
    }

}
