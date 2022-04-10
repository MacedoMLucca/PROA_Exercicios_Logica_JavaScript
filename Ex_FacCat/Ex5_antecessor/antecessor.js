function antecessor(){
    num1=parseInt(prompt("Escreva um algoritmo para ler um valor e escrever o seu antecessor."));
    
    antecessor = num1 - 1;
    
    document.getElementById("resposta").innerHTML='O antecessor de '+num1+' é '+antecessor+'.';

}