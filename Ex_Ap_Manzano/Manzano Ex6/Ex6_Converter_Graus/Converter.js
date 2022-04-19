function Converter(){
    
    let GCelsius , TempFinal;
    GCelsius = parseInt(prompt('Escreva a temperatura que você converter: '));
    TempFinal = (9*GCelsius+160)/5;

    document.getElementById("resposta").innerHTML='Fazendo a conversao, ' + GCelsius + ' graus celsius sao equivalentes a '+ TempFinal+' fahrenheit';
}
