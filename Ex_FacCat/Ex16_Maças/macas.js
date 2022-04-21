function macas(){
    let QtdMaca,ValFinal;

    QtdMaca=parseInt(prompt("Digite o numero de maças que comprou: "));
    
    if (QtdMaca <12) {
        ValFinal = (QtdMaca*130)/100
        document.getElementById("resposta").innerHTML='O valor total é de '+ValFinal+' reais';

    } else {
        ValFinal = QtdMaca*1
        document.getElementById("resposta").innerHTML='O valor total é de '+ValFinal+' reais';

    }
    
}