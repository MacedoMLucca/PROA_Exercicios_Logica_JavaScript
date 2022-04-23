function Media_ponderada(){
    let numUM, numDOIS, numTRES, mf;

    numUM=parseInt(prompt("A primeira nota:"));
    numDOIS=parseInt(prompt("A segunda nota:"));
    numTRES=parseInt(prompt("A terceira nota:"));

    mf = ((numUM*2)+(numDOIS*3)+(numTRES*5))/10

    document.getElementById("resposta").innerHTML='Sua media e de '+mf;

}

