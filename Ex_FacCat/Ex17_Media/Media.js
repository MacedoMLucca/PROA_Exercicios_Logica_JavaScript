function Media(){


    let nota1, nota2, md;
    nota1=parseInt(prompt("Digite a nota1: "));
    nota2=parseInt(prompt("Digite a nota2: "));
    
    md = (nota1+nota2)/2;
    
    if (md >= 6) {
        document.getElementById("resposta").innerHTML='Aluno aprovado com '+md+' de media';
    } else {    
        document.getElementById("resposta").innerHTML='Aluno reprovado com '+md+' de media';
    }

}