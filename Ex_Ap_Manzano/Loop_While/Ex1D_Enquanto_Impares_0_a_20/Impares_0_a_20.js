function Impares_0_a_20(){
    
    let contador = 1;
    let num = 0;

    while(contador <= 20){
        if (contador %2==1) {
            alert(contador);
        }
        contador++;
    }
    document.getElementById('resposta').innerHTML='Esses foram os numeros impares';
}
