function Impares0a20(){

    
    for (let cont = 1; cont <= 20; cont++) {
        if (cont % 2 == 1) {
            alert(cont)
        }
        cont++
    }
    document.getElementById('resposta').innerHTML = 'Esses são os numeros impares de 0 a 20';
}
