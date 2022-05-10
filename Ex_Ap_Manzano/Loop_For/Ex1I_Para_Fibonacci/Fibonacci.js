
function Fibonacci(){
  
   let anterior = 0;
   let atual = 0;
   let proximo = 1;
    alert(atual)
    for (let contador = 1; contador <= 15; contador++) {
       alert(proximo)
       anterior = atual
       atual = proximo
       proximo = atual + anterior       
    }
}
