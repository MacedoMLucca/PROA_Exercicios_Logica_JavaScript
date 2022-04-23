function Num_Frase(){

    let valor1, valor2;

    valor1=parseInt(prompt("Digite o primeiro valor: "));
    valor2=parseInt(prompt("Digite o segundo valor: "));
    
    if (valor1 == valor2) {
        document.getElementById("resposta").innerHTML='Numeros Iguais'        
    } else if(valor1 > valor2){
        document.getElementById("resposta").innerHTML='Primeiro é Maior';
    } else{
        document.getElementById("resposta").innerHTML='Segundo é Maior';
    }

}