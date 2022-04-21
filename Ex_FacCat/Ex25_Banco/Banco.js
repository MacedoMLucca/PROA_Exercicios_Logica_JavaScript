function Banco(){

    let NumConta, saldo, debito, credito,SaldoAtual;

    NumConta=parseInt(prompt("Digite seu numero de conta: "));
    saldo=parseInt(prompt("Digite sue Saldo: "));
    debito=parseInt(prompt("Digite o valor de debito em conta: "));
    credito=parseInt(prompt("Digite o valor de credito em conta: "));
    
    SaldoAtual = saldo - debito + credito;
    
    if (SaldoAtual >= 0) {
        document.getElementById("resposta").innerHTML='Seu saldo é Positivo';
    } else {
        document.getElementById("resposta").innerHTML='Seu saldo é Negativo'; 
    }
}