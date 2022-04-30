function Elevado_ao_expoente(){

    let result=1;
    let cont=1
    let base = parseInt(prompt('Informe a base: '));
    let expo = parseInt(prompt('Informe o expoente: '));

    while(cont <= expo){
        result = result*base;
        cont++;   
    }
    document.getElementById('resposta').innerHTML= 'O resultado é '+result;
}
