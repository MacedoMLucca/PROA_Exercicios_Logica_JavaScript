function Repita_Soma(){
    
   
    let contador = 2;
    let acumulador = 0;

    do{
        if (contador % 2 == 0) {
            acumulador = acumulador + contador;
            // alert(acumulador)
        }
    contador++;
    }while (contador <= 200);

    document.getElementById('resposta').innerHTML = 'Esta é a soma '+acumulador;
}
