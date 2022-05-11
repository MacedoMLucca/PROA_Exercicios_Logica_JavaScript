function Volume_Caixa(){
    
   let comprimento = parseInt(prompt('O valor do comprimento: '));
   let largura = parseInt(prompt('O valor de largura: '));
   let altura = parseInt(prompt('O valor de altura: '));
    
   let volume = comprimento * largura *altura
    document.getElementById("resposta").innerHTML='A caixa tem ' + volume + ' metros cubicos de volume';
}
