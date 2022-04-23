function Crescente(){
    
    let num1, num2;
    num1=parseInt(prompt("Informe o primeiro valor: "));
    num2=parseInt(prompt("Informe o segundo valor: "));
    
    if (num1>num2) {
        document.getElementById("resposta").innerHTML='A ordem é: '+num2 +' , '+num1;   
    } else {
        document.getElementById("resposta").innerHTML='A ordem é: '+num1 +' , '+num2;  
    }
}