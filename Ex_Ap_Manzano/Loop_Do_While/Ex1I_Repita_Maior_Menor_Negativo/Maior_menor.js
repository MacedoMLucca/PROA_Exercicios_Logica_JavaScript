function Maior_menor(){
    
    maior = 0;
    menor = 9999;
    n = 1;
    do{
        n=parseInt(prompt('Entre com um numero:'));
        if (n>maior) {
            maior = n
        }
        if (n<menor) {
            menor = n
        }
    
    }while (n>0);
    document.getElementById('resposta').innerHTML= 'O maior é '+maior+' e o menor é '+menor;

}
