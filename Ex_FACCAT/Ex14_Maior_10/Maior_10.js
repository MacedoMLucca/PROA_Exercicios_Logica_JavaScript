function Maior_10(){
    let valor;
    valor=parseInt(prompt("Digite um numero: "));
        if(valor>10) {
            document.getElementById("resposta").innerHTML='É maior que 10'; 
        } else {
            document.getElementById("resposta").innerHTML='É menor que 10';  
        }
}