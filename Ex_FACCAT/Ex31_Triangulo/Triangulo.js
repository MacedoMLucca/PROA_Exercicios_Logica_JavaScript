function Triangulo(){

    let Lado1, Lado2, Lado3;
 
    Lado1=parseInt(prompt("Digite o primeiro lado: "));
    Lado2=parseInt(prompt("Digite o segundo lado:"));
    Lado3=parseInt(prompt("Digite o terceiro lado:"));
    

    if (Lado1 < (Lado2 + Lado3)) {
        if (Lado3 < (Lado1 + Lado2)) {
            if (Lado2 < (Lado1 + Lado3)) {
                document.getElementById("resposta").innerHTML='Seus lados formam um triagulo';
            }else{
                document.getElementById("resposta").innerHTML='Seus lados não formam um quadrado';
            }
        }else{
            document.getElementById("resposta").innerHTML='Seus lados não formam um quadrado';
        }   
    }else{
        document.getElementById("resposta").innerHTML='Seus lados não formam um quadrado';
    }
    

}