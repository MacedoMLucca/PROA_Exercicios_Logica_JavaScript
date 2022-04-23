function Ano_mes_dia(){


    let ano, mes, dia, resultMes ,resultAno, resultado;
    ano=parseInt(prompt("Quantos anos você tem?"));
    resultAno = ano*365;
    mes=parseInt(prompt("Quantos meses se passaram do seu aniversario(caso não tenha passado 1 mês digite 0)"));
    resultMes = mes*30;
    dia=parseInt(prompt("Quantos dias se passaram do seu 'mêsversario'"));
    resultado = dia + resultAno + resultMes


    
    document.getElementById("resposta").innerHTML='Você tem '+resultado+' dias de vida';

}

