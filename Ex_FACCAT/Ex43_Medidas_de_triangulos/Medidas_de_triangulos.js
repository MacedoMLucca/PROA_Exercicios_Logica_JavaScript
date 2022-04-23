function Medidas_de_triangulos(){

    let a,b,c,mens;

    a=parseInt(prompt("Digite o valor:"));
    b=parseInt(prompt("Digite o valor:"));
    c=parseInt(prompt("Digite o valor:"));
    

    if ((a < b+c) && (b < a+c) && (c <a+b) ) {
        if ((a==b) && (b==c)) {
            mens = "Triângulo Equilátero"
            document.getElementById("resposta").innerHTML=mens;
        } else if ((a==b) || (b==c) || (a==c)) {
            mens = "Triângulo Isósceles"
            document.getElementById("resposta").innerHTML=mens;
        } else {
            mens = "Triângulo Escaleno"
            document.getElementById("resposta").innerHTML=mens;
        }
    } else{
        mens = "Não e possível formar um triângulo"
        document.getElementById("resposta").innerHTML=mens;
    }   


}