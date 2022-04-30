function Soma_media_10(){
    
    let num,result;
    let cont = 0;
    let acumulador = 0;

    while(cont <10){
        num = parseInt(prompt('Informe um numero: '));
        acumulador = acumulador+num
        cont++;
   
    }
    result = acumulador/cont;
    document.getElementById('resposta').innerHTML= 'A soma dos '+ cont+' numeros é igual a '+acumulador+ ' e divisao aritmetica é de '+ result;
      
}

  
