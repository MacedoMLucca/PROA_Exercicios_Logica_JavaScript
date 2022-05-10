function volumeLata(){
    

    let altura = parseInt(prompt('Escreva a altura da sua lata de oleo: '))
    let Diametro = parseInt(prompt('Escreva a diâmetro da sua lata de oleo:  '))

    let r = Diametro/2
    let volume = 3.14159*(Math.pow(r,2))*altura

    document.getElementById("resposta").innerHTML='O volume da sua lata é: ' + volume.toFixed(2);
}
