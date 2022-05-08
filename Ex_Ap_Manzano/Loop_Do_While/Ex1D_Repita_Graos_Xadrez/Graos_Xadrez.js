function Graos_Xadrez(){
    
    let grao = 1;
    let contador = 1;
    let acumulador = 0;
    alert("Quadrado "+contador+" -> Quantidades de Graos "+grao)
    do{
      contador++
      acumulador = acumulador + grao
      grao = grao * 2
      alert("Quadrado "+contador+" -> Quantidades de Graos "+grao)
    
    }while (contador < 64 );
    document.getElementById('resposta').innerHTML='E a soma total é de ' + acumulador.toFixed(2);
}
