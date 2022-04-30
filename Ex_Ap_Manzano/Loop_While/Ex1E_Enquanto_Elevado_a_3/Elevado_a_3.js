function Elevado_a_3(){
    
    let contador = 0;
   

    while(contador <=15){

        result = contador**3;
        
        alert(contador +' ^ 3 ='+result);


        contador++;
    }
    document.getElementById('resposta').innerHTML= 'De 0 a 15 esses foram os numeros elevados a 3';
}
