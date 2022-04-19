function Tabuada(){
    
    let contador,num,result;
  

    contador=1
    num = parseInt(prompt('Informe um numero: '));

    while(contador <11){
        result = num*contador;
        alert(num+' X '+ contador+' = '+ result);
        contador++;
   
    }
    document.getElementById('resposta').innerHTML= 'O numero informado foi '+num;
}
