function Converter(){
    
    let salarioAtual = parseInt(prompt("Digite seu salario atual: "));
    let reajuste = parseInt(prompt("Quantos % será o reajuste: "));
    let novoSalario = salarioAtual + (salarioAtual * reajuste / 100);

    alert(`Seu novo salario será: ${novoSalario.toFixed(2)}`);



}
