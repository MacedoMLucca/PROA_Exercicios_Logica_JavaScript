function Media_ponderada(){
    
    
    let TempoViagem = parseInt(prompt('Digite o tempo da sua viagem (em horas): '));
    let Velocidade = parseInt(prompt('Digite a velocidade media do seu carro durante a viagem: '));
    let Distacia = TempoViagem * Velocidade
    let LitrosUsados = Distacia/12
    document.getElementById("resposta").innerHTML='Foram ' + LitrosUsados.toFixed(2) + ' litros usados na viagem';
}
