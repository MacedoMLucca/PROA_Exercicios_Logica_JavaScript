function Fibonacci(){
    
    let contador=1;
    let anterior=0;
    let atual=0;
    let proximo=1;
    alert(atual)

    while(contador <16){
        alert(proximo)
        anterior = atual
        atual = proximo
        proximo = atual+anterior    
        contador++;
    }
    document.getElementById('resposta').innerHTML= 'Esses são os numeros de Fibonacci';
}