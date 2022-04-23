function Aposentadoria(){

    let RmEmpresa=parseInt(prompt("Digite o RM da empresa: "));
    let anoNasc=parseInt(prompt("Digite o ano de seu nascimento: "));
    let anoAtual=parseInt(prompt("Digite o ano em que estamos: "));
    let entroEmpresa=parseInt(prompt("Digite o ano que entrou na empresa: "));
    
   let tempoEmpresa = anoAtual - entroEmpresa;
   let idade = anoAtual - anoNasc;

    if (idade >= 65) {
        document.getElementById("resposta").innerHTML='O funcionario '+ RmEmpresa+' ja pode "Requerer aposentadoria" ';
    } else if (tempoEmpresa >= 30) {
        document.getElementById("resposta").innerHTML='O funcionario '+ RmEmpresa+' ja pode "Requerer aposentadoria" ';
    }else if (idade >= 60 && tempoEmpresa >= 25) {
        document.getElementById("resposta").innerHTML='O funcionario '+ RmEmpresa+' ja pode "Requerer aposentadoria" ';
    }else{
        document.getElementById("resposta").innerHTML='O funcionario '+ RmEmpresa+' ainda não pode requerer';

    }


}