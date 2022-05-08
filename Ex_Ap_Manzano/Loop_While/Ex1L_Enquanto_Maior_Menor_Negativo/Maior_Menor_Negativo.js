function Maior_Menor_Negativo(){
    
    let maior=0;
    let menor=9999;
    let n = 1;
    

  

    
    while(n>0){
        n = parseInt(prompt('Informe um numero: '));
        if (n>maior) {
            maior = n
        }
        if (n<menor) {
            menor = 0
        }
   
    }


    document.getElementById('resposta').innerHTML= 'O Maior é '+maior + ' e o menor é '+menor;
}
