function VerdadeiroOuFalso(){

    let a = true;
    let b = true;
    let c = false;
    
    document.getElementById("resposta").innerHTML='1 - '+ ((a && b)||(a || b))+' //'+ '\n 2 - '+((a||b)&&(a&&b))+' //'+' 3 - '+ ((a || c && b) != (a != b) );

}