function Fatorial_Impares(){
    let cont = 1
    let num = 1
    let fatorial = 0

    for(cont = 1;cont <= 10; cont++){
        if(cont % 2 == 1){
            fatorial = 1
            num = cont
            do{
                fatorial = fatorial*num
                num = num-1
            }while(num>1)
            alert("o numero impar "+cont+" tem o fatorial de "+fatorial)
        }
    }
}
