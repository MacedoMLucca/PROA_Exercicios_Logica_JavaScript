function Elevado_ao_expoente(){

   let res = 1
   let base = parseInt(prompt('Digite um valor para base:'));
   let expo = parseInt(prompt('Digite um valor para o expoente:')); 
   for (let cont = 1; cont <= expo; cont++) {
       res = res*base
       alert(base+' ^ '+cont+' = '+res)
       
   } 
   
   
  
}
