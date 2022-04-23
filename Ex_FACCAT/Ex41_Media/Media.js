function Media(){
    
    let n1=parseInt(prompt("Digite a primeira nota: "));
    let n2=parseInt(prompt("Digite a segunda nota: "));
    let n3=parseInt(prompt("Digite a terceira nota: "));
    let mdExercicio=parseInt(prompt("Digite a media de exercicios nota: "));
    
    let mdAprov = (n1 + n2 * 2 + n3 * 3 + mdExercicio )/7;

    if (mdAprov >= 9.0) {
        document.getElementById("resposta").innerHTML='Este aluno ficou com nota: '+ mdAprov.toFixed(2)+' e Conceito A'; 
    } else if (mdAprov >= 7.5 && mdAprov < 9.0) {
        document.getElementById("resposta").innerHTML='Este aluno ficou com nota: '+ mdAprov.toFixed(2)+' e Conceito B'; 
    }else if (mdAprov >= 6 && mdAprov < 7.5) {
        document.getElementById("resposta").innerHTML='Este aluno ficou com nota: '+ mdAprov.toFixed(2)+' e Conceito C'; 
    }else {
        document.getElementById("resposta").innerHTML='Este aluno ficou com nota: '+ mdAprov.toFixed(2)+' e Conceito D'; 
    }

}