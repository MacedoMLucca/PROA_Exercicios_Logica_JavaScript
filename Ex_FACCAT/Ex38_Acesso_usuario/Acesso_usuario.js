function Acesso_usuario(){

    let login = 1234;
    
    let usuario = parseInt(prompt("Digite seu usuario: "));
    
    if (usuario != login) {
        document.getElementById("resposta").innerHTML=' "Usuário inválido!" ';
    } else {
        let senha = parseInt(prompt("Digite a senha: "));
        if (senha != 9999) {
            document.getElementById("resposta").innerHTML=' "Senha incorreta" ';
            
        } else {
            document.getElementById("resposta").innerHTML=' "Acesso permitido" ';           
        }
    }

}