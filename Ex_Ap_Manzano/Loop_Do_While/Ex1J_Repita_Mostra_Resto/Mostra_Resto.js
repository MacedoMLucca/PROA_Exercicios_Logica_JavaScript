function Mostra_Resto(){
    
   let n1, n2, r, resto, multi, aux;
   let c = 1;
   n1 = parseInt(prompt('Digite o dividendo: '));
   n2 = parseInt(prompt('Digite o divisor: '));
   aux = n1
    do{
        if (n1 >= n2) {
            n1 = n1-n2
            r = n2
            c++
        }
        
    }while (n2 >= n1);
    multi = c*n2
    resto = aux - multi
  document.getElementById('resposta').innerHTML ='Resultado '+c+' e o resto é '+resto;
}
