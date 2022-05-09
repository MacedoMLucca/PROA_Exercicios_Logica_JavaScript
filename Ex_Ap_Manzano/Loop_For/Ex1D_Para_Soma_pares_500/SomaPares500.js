function SomaPares500(){

    let acumulador = 0;
    for (let contadora = 2; contadora <= 500 ; contadora+= 2) {
        acumulador = acumulador + contadora 
    }
    document.getElementById('resposta').innerHTML = 'A soma é de'+ acumulador;
}
