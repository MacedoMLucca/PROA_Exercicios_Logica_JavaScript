function Converter(){
    
    let candidatoA = parseInt(prompt("Quantida de votos validos para o candidato A: "));
    let candidatoB = parseInt(prompt("Quantida de votos validos para o candidato B: "));
    let candidatoC = parseInt(prompt("Quantida de votos validos para o candidato C: "));
    let votosNulos = parseInt(prompt("Quantidade de votos nulos: "));
    let votosBrancos = parseInt(prompt("Quantidade de votos em Branco: "));
    let votosValidos, totalEleitores, pcValidoA, pcValidoB, pcValidoC, pcNulo, pcBranco, pcTotalValido;

    votosValidos = candidatoA + candidatoB + candidatoC;
    totalEleitores = votosValidos + votosBrancos + votosNulos;

    pcTotalValido = (votosValidos * 100) / totalEleitores;

    pcValidoA = (candidatoA * 100) / totalEleitores;
    pcValidoB = (candidatoB * 100) / totalEleitores;
    pcValidoC = (candidatoC * 100) / totalEleitores;

    pcBranco = (votosBrancos * 100) / totalEleitores;
    pcNulo = (votosNulos * 100) / totalEleitores;

    alert(`Total de eleitores: ${totalEleitores}
    Percentual votos validos ${pcTotalValido.toFixed(2)}%
    Percentual validos candidato A ${pcValidoA.toFixed(2)}%
    Percentual validos candidato B ${pcValidoB.toFixed(2)}%
    Percentual validos candidato C ${pcValidoC.toFixed(2)}%
    Percentual votos em branco ${pcBranco.toFixed(2)}%
    Percentual votos nulos ${pcNulo.toFixed(2)}%`);



}
