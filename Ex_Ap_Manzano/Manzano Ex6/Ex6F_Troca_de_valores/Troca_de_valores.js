function Troca_de_valores(){

    let C;
   let A = parseInt(prompt('O valor de A: '));
   let B = parseInt(prompt('O valor de B: '));

   C = A
   A = B
   B = C

   document.getElementById("resposta").innerHTML='O valor de A passa ser ' + A + ' e o valor de B passa a ser '+ B;
}
