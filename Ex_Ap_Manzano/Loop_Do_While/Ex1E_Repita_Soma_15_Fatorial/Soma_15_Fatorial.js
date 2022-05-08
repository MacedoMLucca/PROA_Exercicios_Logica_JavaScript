function Soma_15_Fatorial(){
    
    let contador = 1;
    let acumulador = 1;
    let soma = 0;
    let fator;
    do{
        fator = parseInt(prompt("Digite um numero: " +contador));
        do {
            acumulador = acumulador * fator
            fator--
                if (fator == 1) {
                    soma = soma + acumulador
                    acumulador = 1
                }     
        } while (fator >0);
        contador++
    }while (contador <=15);

    document.getElementById('resposta').innerHTML = 'A soma dos fatoriais é de '+ soma ;
}
