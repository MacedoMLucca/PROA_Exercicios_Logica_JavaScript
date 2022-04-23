function Ajuste_comparacao(){

    let x, y, z,resposta;

    x=parseInt(prompt("Informe o valor de X:"));
    y=parseInt(prompt("Informe o valor de Y:"));
    
    z = (x*y) +5;

    if (z <= 0) {
        resposta = 'A';
    }else if(z<=100){
        resposta = 'B';
    }else{
        resposta = 'C';
    }
    
    document.getElementById("resposta").innerHTML= z +' , '+ resposta;

}