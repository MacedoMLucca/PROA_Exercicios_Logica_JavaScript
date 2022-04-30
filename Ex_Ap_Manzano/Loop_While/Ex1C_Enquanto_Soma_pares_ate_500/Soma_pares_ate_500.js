function Tabuada(){
    
    let soma;
    let contador=1
  
    while(contador < 500 ){
        if (contador % 2 == 0) {
            soma = soma+contador
            alert(soma)
        }
        contador++;
   
    }
    document.getElementById('resposta').innerHTML= 'A soma dos valores é :'+soma;
}
