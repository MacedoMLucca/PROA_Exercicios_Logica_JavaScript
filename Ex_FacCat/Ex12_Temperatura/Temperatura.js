function Temperatura(){
   
    let Gfahren,TempC;
    Gfahren=parseInt(prompt("A temperatura em Fahrenheit: "));

    TempC = (5*(Gfahren-32))/9

    document.getElementById("resposta").innerHTML='A temperatura em graus celsius: '+ TempC;
}
