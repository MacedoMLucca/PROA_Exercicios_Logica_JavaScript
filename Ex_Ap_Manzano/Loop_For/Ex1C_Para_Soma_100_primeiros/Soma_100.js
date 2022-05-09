function Soma_100(){

    let acumulador = 0;
    for (let num = 0; num <= 100; num++) {
        acumulador = acumulador + num;
    }
    document.getElementById('resposta').innerHTML = 'A soma é '+ acumulador;
}
