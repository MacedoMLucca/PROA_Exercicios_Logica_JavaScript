function Quadrado_numero(){
    
    let num = parseInt(prompt('Digite o numero desejado: '))

    resul = Math.pow(num,2)

    document.getElementById("resposta").innerHTML='O numero ' + num + ' ao quadrado é '+  resul;
}
