function Tabuada(){

    let num = parseInt(prompt('digite um numero:'))
    for (let contadora = 0; contadora <= 10; contadora++) {
     alert(num +' X '+ contadora +' = '+ num*contadora)
    }
    document.getElementById('resposta').innerHTML = 'O numero escolhido foi '+ num;
}
