function Adições_multiplicacoes(){
     
  let A = parseInt(prompt('O valor de A: '));
  let B = parseInt(prompt('O valor de B: '));
  let C = parseInt(prompt('O valor de C: '));
  let D = parseInt(prompt('O valor de D: '));
    
  let SOMAAB = A + B;
  let SOMAAC = A + C;
  let SOMAAD = A + D;
  let SOMABC = B + C;
  let SOMABD = B + D;
  let SOMADC = D + C;

  let PRODUTOAB = A * B;
  let PRODUTOAC = A * C;
  let PRODUTOAD = A * D;
  let PRODUTOBC = B * C;
  let PRODUTOBD = B * D;
  let PRODUTODC = D * C;

  alert('Adição \n'+
   'A soma entre'+ A+ '+'+ B+ ' é: '+ SOMAAB +'\n'+
   'A soma entre'+ A+ '+'+ C+ ' é: '+ SOMAAC +'\n'+
   'A soma entre'+ A+ '+'+ D+ ' é: '+ SOMAAD +'\n'+
   'A soma entre'+ B+ '+'+ C+ ' é: '+ SOMABC +'\n'+
   'A soma entre'+ B+ '+'+ D+ ' é: '+ SOMABD +'\n'+
   'A soma entre'+ C+ '+'+ D+ ' é: '+ SOMADC + '\n' 
  )

  alert(' e a Multiplicação \n'+
   'A Multiplicação entre'+ A+ '+'+ B+ ' é: '+ PRODUTOAB +'\n'+
   'A Multiplicação entre'+ A+ '+'+ C+ ' é: '+ PRODUTOAC +'\n'+
   'A Multiplicação entre'+ A+ '+'+ D+ ' é: '+ PRODUTOAD +'\n'+
   'A Multiplicação entre'+ B+ '+'+ C+ ' é: '+ PRODUTOBC +'\n'+
   'A Multiplicação entre'+ B+ '+'+ D+ ' é: '+ PRODUTOBD +'\n'+
   'A Multiplicação entre'+ C+ '+'+ D+ ' é: '+ PRODUTODC + '\n' 
  )


   

    
}
