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

    // Validando o campo "Nome"
    if (nome === '') {
        setErrorFor(document.getElementById('nome'), 'O nome de usuário é obrigatório!');
        formInvalido = true;
    } else {
        setSucessFor(document.getElementById('nome'));
    }

    // Validando o campo "Email"
    if (email === '') {
        setErrorFor(document.getElementById('email'), 'O email é obrigatório!');
        formInvalido = true;
    } else if (!email.includes('@')) {
        setErrorFor(document.getElementById('email'), 'Email inválido.');
        formInvalido = true;
    } else {
        setSucessFor(document.getElementById('email'));
    }

    // Validando o campo "Senha"
    if (senha === '') {
        setErrorFor(document.getElementById('senha'), 'A senha é obrigatória!');
        formInvalido = true;
    } else if (senha.length < 7) {
        setErrorFor(document.getElementById('senha'), 'A senha precisa de no mínimo 7 caracteres!');
        formInvalido = true;
    } else {
        setSucessFor(document.getElementById('senha'));
    }

    // Validando o campo "Confirmar Senha"
    if (confirmarSenha === '') {
        setErrorFor(document.getElementById('confirmar-senha'), 'Confirmar a senha é obrigatório!');
        formInvalido = true;
    } else if (confirmarSenha !== senha) {
        setErrorFor(document.getElementById('confirmar-senha'), 'As senhas não conferem. Tente novamente!');
        formInvalido = true;
    } else {
        setSucessFor(document.getElementById('confirmar-senha'));
    }

    // Validando o campo "Telefone"
    if (telefone === '') {
        setErrorFor(document.getElementById('telefone'), 'O número de telefone é obrigatório!');
        formInvalido = true;
    } else {
        setSucessFor(document.getElementById('telefone'));
    }

    // Atualizando o estado do botão com base na validade do formulários
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