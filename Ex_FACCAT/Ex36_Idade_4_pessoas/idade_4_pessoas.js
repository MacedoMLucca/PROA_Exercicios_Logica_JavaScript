function idade_4_pessoas(){

    let idadeH1,idadeH2,idadeM1,idadeM2, soma1, soma2,Hvelho,Hnovo,Mnova,Mvelha;
    
    idadeH1=parseInt(prompt("Digite a idade do primeiro homem: "));
    idadeH2=parseInt(prompt("Digite a idade do segundo homem: :"));
    idadeM1=parseInt(prompt("Digite a idade do primeira mulher: :"));
    idadeM2=parseInt(prompt("Digite a idade do segunda mulher: :"));

    if (idadeH1 != idadeH2) {
        if (idadeH1 > idadeH2) {
            Hvelho = idadeH1;
            Hnovo = idadeH2;
        } else {
            Hvelho = idadeH2;
            Hnovo = idadeH1;
        }
    } else {
        document.getElementById("resposta").innerHTML='As idades dos homens devem ser diferentes';
    }
    if (idadeM1 != idadeM2) {
        if (idadeM1 > idadeM2) {
            Mvelha = idadeM1;
            Mnova = idadeM2;
        } else {
            Mvelha = idadeM2;
            Mnova = idadeM1;       
        }
    } else {
        document.getElementById("resposta").innerHTML='As idades das mulheres devem ser diferentes';   
    }

    soma1 = Hvelho + Mnova;
    soma2 = Hnovo + Mvelha;

    document.getElementById("resposta").innerHTML='A soma das idades do homem mais velho com a mulher mais nova é '+soma1+' e a soma das idades do homem mais novo com a amulher mais velha é '+soma2;

}