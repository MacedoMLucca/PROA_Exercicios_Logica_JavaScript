function num_gols(){

    let  Time1, Time2, NumGols1, NumGols2;
    
    Time1=prompt("Digite o nome do primeiro time: ");
    NumGols1=parseInt(prompt("Digite o numero de com feitos por ele: "));
    Time2=prompt("Digite o nome do primeiro time: ");
    NumGols2=parseInt(prompt("Digite o numero de com feitos por ele: "));
    

    if (NumGols1 > NumGols2) {
        document.getElementById("resposta").innerHTML='O time '+Time1+' foi vitorioso na partida';        
    } else if (NumGols2 > NumGols1) {
            document.getElementById("resposta").innerHTML='O time '+Time2+' foi vitorioso na partida';  
        }else{
            document.getElementById("resposta").innerHTML='O jogo entre '+Time1+' e '+Time2+' terminou em empate';  
        }    

}