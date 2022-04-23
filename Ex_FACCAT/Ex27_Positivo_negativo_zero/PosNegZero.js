function PosNegZero(){

    let num = parseInt(prompt("Informe um numero: "));
    
    
    if (num == 0 ) {
        document.getElementById("resposta").innerHTML='O numero é nulo';
    } else if (num > 0 ) {
        document.getElementById("resposta").innerHTML='O numero é POSITIVO'
    } else{
        document.getElementById("resposta").innerHTML='O numero é NEGATIVO';        
    }
    

}