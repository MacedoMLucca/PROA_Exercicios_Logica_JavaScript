function Acha_Erro_peso_ideal(){

    let nome,sexo, altura,peso_ideal;

    altura=parseInt(prompt("Informe sua altura: "));
    nome=prompt("Digite seu nome: ");
    sexo=parseInt(prompt("Digte seu sexo (com M ou F):"));
    

   if (sexo = 'M') {
       peso_ideal = (72.7 * altura) - 58;
   } else {
       peso_ideal = (62.1 * altura) - 44.7;
   }
   
   document.getElementById("resposta").innerHTML='Olá '+nome+'!, seu peso ideal e de '+peso_ideal.toFixed(2)+' Kg';

}