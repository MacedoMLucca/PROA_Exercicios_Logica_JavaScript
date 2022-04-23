function Total_Eleitores(){
    
    let TotalEleitor, votoB,porVB, votoN,porVN, votoV,porVV;




    TotalEleitor=parseInt(prompt("Digite o numero total de eleitores: "));
    votoB=parseInt(prompt("Digite o numero total de votos brancos: "));
    porVB = votoB*100/TotalEleitor;
    votoN=parseInt(prompt("Digite o numero total de votos nulos: "));
    porVN = votoN*100/TotalEleitor;
    votoV=parseInt(prompt("Digite o numero total de votos validos: "));
    porVV = votoV*100/TotalEleitor
    


    
    document.getElementById("resposta").innerHTML='Os votos Brancos representam '+porVB+
    '% ,e os votos nulos representam '+porVN+ '% os votos validos representam '+porVV+'% ,de um total de ' +TotalEleitor;

}
