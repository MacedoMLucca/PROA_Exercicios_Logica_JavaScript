function PosNeg(){
    
    
    let valor;


    valor=parseInt(prompt("Digite um valor:"));
    
    if (valor >= 0) {
    document.getElementById("resposta").innerHTML='Seu valor é POSITIVO';
    }else{
    document.getElementById("resposta").innerHTML='Seu valor é NEGATIVO';
    }
}