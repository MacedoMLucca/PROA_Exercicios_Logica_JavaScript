function retangulo(){
    let area;
    base=parseInt(prompt("Digite a Base do retangulo:"));
    altura=parseInt(prompt("Digite a Altura do retangulo:"));
    

    area = base * altura;
    
    document.getElementById("resposta").innerHTML='A area deste retangulo é de '+area+' cm quadrados';

}