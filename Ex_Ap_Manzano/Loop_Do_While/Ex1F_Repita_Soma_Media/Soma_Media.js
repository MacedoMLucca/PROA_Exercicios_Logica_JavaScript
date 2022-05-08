function Soma_Media(){
    
    let contador  = 0;
    let soma = 0;
    let n = 0;
    let md = 0;

    do{
        soma = soma + n;
        contador++
        n = parseInt(prompt("Entre com um numero"));
        md = soma/(contador -1)
    }while (n>0);
    document.getElementById('resposta').innerHTML = 'A soma é '+soma+' para isso foram digitados '+contador+' numeros, com um negativo ('+n+') e com uma media de '+md;
}
