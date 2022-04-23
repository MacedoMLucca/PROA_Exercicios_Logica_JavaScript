function pode_votar(){
    let AnoNasc, AnoAtual, idade;
    AnoNasc=parseInt(prompt("Digite o ano que você nasceu: "));
    AnoAtual=parseInt(prompt("Digite o ano atual: "));
    
    idade = AnoAtual-AnoNasc

    if (idade >= 18) {
        document.getElementById("resposta").innerHTML='Parabéns , Você já pode votar';
    } else {
        document.getElementById("resposta").innerHTML='Que pena!,Você ainda não pode votar';        
    }
}