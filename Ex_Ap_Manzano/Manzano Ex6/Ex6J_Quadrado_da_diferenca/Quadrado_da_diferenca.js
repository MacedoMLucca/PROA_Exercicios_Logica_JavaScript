function Quadrado_da_diferenca(){
    
    
    let a = parseInt(prompt('digite o primeiro numero: '));
    let b = parseInt(prompt('digite o segundo numero: '));
    
    let dif = a - b;

    let resul = Math.pow(dif,2)
    

    document.getElementById("resposta").innerHTML='O quadrado da difereção entre ' + a + ' e '+ b +' é: ' + resul;
}
