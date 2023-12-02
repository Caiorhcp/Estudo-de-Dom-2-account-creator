
function mostrarBacurim() {
    let submit = document.getElementById('botao')
    let senha = document.getElementById('senha').value;
    let senha_confirm = document.getElementById('senhaDigite').value;
    let exibirParabens = document.getElementById('esconderCadastro');
    let esconderSenha = document.getElementById('esconderDiv');
    
    if (senha !== senha_confirm || senha.length < 8 || senha_confirm.length < 8) {
    alert("Senhas não conferem ou têm menos de 8 caracteres");
        esconderSenha.style.display = "block";
    } else {
    alert("Cadastro Completo!");
    exibirParabens.style.display = "none";
        submit.type = "submit";
    }
    }
    
    function desocultar(){
    let senha_confirm = document.getElementById('senhaDigite');
    let senha = document.getElementById('senha');
    
    if (senha.type === 'password'  &&  senha_confirm.type === 'password' ) {
        senha.type = 'text'
        senha_confirm.type = 'text'
    } else {
        senha.type = 'password';
        senha_confirm.type = 'password';
    }
    }
    
    function desocultarLogin(){
    let senha = document.getElementById('senha');
    
    if (senha.type === 'password') {
        senha.type = 'text'
    
    } else {
        senha.type = 'password';
    }
    }
    
    function login(){
    let senha = document.getElementById('senha').value;
    let email = document.getElementById('email').value;
    
    //Exemplo:
    //if(email === "aluno@email.com.br" && senha === "0123456789") {
    //exemplo    
    if (email == email && senha.length >=8){
    alert("Login feito com sucesso!");
        login_error.style.display = "none";
        botaoEnviar.type = "submit"
        
    } else {
        alert("Email ou senha incorretos!");
        alert("Verifique o a quantidade de caractere, (senha 8+)")
        login_error.style.display = "block";
    }
    }
    