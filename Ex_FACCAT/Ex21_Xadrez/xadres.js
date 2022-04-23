function xadres(){

    let hInicio, hFinal, duracao, duracao1;


    hInicio=parseInt(prompt("Escreva o horario incial da partida: "));
    hFinal=parseInt(prompt("Escreva o horario incial da partida: "));
    

    duracao = hFinal - hInicio;
    if (duracao > 0) {
        document.getElementById("resposta").innerHTML='A partida durou '+ duracao +' horas';

    } else {
        duracao1 = duracao + 24;
        document.getElementById("resposta").innerHTML='A partida durou '+ duracao1+ ' horas';
    }

}