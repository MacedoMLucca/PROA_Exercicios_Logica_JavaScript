function Soma_quadrado_3(){
    
    
    let a = parseInt(prompt('Escreva a temperatura que você converter: '));
    let b = parseInt(prompt('Escreva a temperatura que você converter: '));
    let c = parseInt(prompt('Escreva a temperatura que você converter: '));
    
    a = a * a;
    b = b * b;
    c = c * c;
    soma = a + b + c;
    document.getElementById("resposta").innerHTML='A soma dos quadrados dos numeros inseredo é: '+ soma;
}
