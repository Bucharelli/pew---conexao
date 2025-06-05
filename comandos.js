const enviar = document.getElementById("enviar");
const form = document.getElementById('form');

form.addEventListener('submit', function(event){
    checkInputs();
});

form.addEventListener('keyup', function() {
    checkInputs();
});

function checkInputs() {
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value.trim();
    const confirmarSenha = document.getElementById('confirmar-senha').value.trim();
    const telefone = document.getElementById('telefone').value.trim();

    let formInvalido = true;
    /*
    var icon = /([!@#$%&*_])/;
    var number = /([0-9])/;
    var word = /([a-z].*[A-Z])|([A-Z].*[a-z])/;
    */

    const temLetraMaiuscula = /[A-Z]/g.test(senha);
    const temNumeros = /[0-9]/g.test(senha);
    const temLetraMinuscula = /[a-z]/g.test(senha);
    const temCaractereEspecial = /[^a-zA-Z0-9\s]/g.test(senha);

    // Validando o campo "Nome"
    if (nome === '') {
        setErrorFor(document.getElementById('nome'), 'O nome de usuário é obrigatório!');
        formInvalido = true;
    } else {
        setSucessFor(document.getElementById('nome'));
    }
    if (email === '') {
        setErrorFor(document.getElementById('email'), 'O email é obrigatório!');
        formInvalido = true;
    } else if (!email.includes('@')) {
        setErrorFor(document.getElementById('email'), 'Email inválido.');
        formInvalido = true;
    } else {
        setSucessFor(document.getElementById('email'));
    }
    if (senha === '') {
        setErrorFor(document.getElementById('senha'), 'A senha é obrigatória!');
        formInvalido = true;
    } else if (senha.length < 8) {
        setErrorFor(document.getElementById('senha'), 'A senha precisa de no mínimo 7 caracteres!');
        formInvalido = true;
    } else if (temLetraMaiuscula) {
        setErrorFor(document.getElementById('senha'), 'A senha precisa possuir um caracter em MAIÚSCULO');
        formInvalido = true;
   /* } else if (temLetraMinuscula) {
        setErrorFor(document.getElementById('senha'), 'A senha precisa possuir um caracter em MINUSCULO');
        formInvalido = true;
    } else if (temCaractereEspecial) {
        setErrorFor(document.getElementById('senha'), 'A senha precisa possuir um caracter em ESPECIAL');
        formInvalido = true;
    } else if (temNumeros) {
        setErrorFor(document.getElementById('senha'), 'A senha precisa possuir um NÚMERO');
        formInvalido = true;*/
    } else {
        setSucessFor(document.getElementById('senha'));
    }
    if (confirmarSenha === '') {
        setErrorFor(document.getElementById('confirmar-senha'), 'Confirmar a senha é obrigatório!');
        formInvalido = true;
    } else if (confirmarSenha !== senha) {
        setErrorFor(document.getElementById('confirmar-senha'), 'As senhas não conferem. Tente novamente!');
        formInvalido = true;
    } else {
        setSucessFor(document.getElementById('confirmar-senha'));
    }
    if (telefone === '') {
        setErrorFor(document.getElementById('telefone'), 'O número de telefone é obrigatório!');
        formInvalido = true;
    } else {
        setSucessFor(document.getElementById('telefone'));
    }
    if (formInvalido) {
        enviar.disabled = false; // Habilita o botão
        enviar.style.backgroundColor = 'gray';
    } else {
        enviar.disabled = true; // Desabilita o botão
        enviar.style.backgroundColor = '';
    }
}

// Função para exibir erro no campo
function setErrorFor(input, message) {
    //return false;
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
    formControl.className = 'form-control error';
}

// Função para exibir sucesso no campo
function setSucessFor(input) {
    //return false;
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}