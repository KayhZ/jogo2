let count = 1;
let limite = 5;
let secret_number = getSecretNumber();
let rotes = 3;


function getSecretNumber() {
    return parseInt(Math.random() * limite + 1);
}


function insereTexto(tag, texto) {
    let varTag = document.querySelector(tag);
    varTag.innerHTML = texto;
    responsiveVoice.speak(texto, "UK English Female", { pitch: 1 });
}


function inicializarTexto() {
    insereTexto('h1', 'Secret Number');
    insereTexto('p', `Choose a number from 1 to ${limite}:`);
}

inicializarTexto();
function verificarChute() {
    let guess = parseInt(document.querySelector('input').value);

    if (isNaN(guess) || guess < 1 || guess > limite) {
        insereTexto('p', 'Please enter a valid number within the range.');
        return;
    }

    if (rotes>0) {
        if (secret_number === guess) {
            let word_attempts = count > 1 ? 'attempts' : 'attempt';
            insereTexto('h1', `Congratulations! You got it right in ${count} ${word_attempts}.`);
            document.getElementById('reiniciar').removeAttribute('disabled');
            document.getElementById('chutar').setAttribute('disabled', true);
            document.querySelector('input').setAttribute('disabled', true);
        } else {
            rotes--; // Decrementa o número de tentativas
            if (guess > secret_number) {
                insereTexto('h1', 'The number is smaller.');
                insereTexto('p', `You have ${rotes} attempt${rotes === 1 ? '' : 's'} left.`);
            } else {
                insereTexto('h1', 'The number is bigger.');
                insereTexto('p', `You have ${rotes} attempt${rotes === 1 ? '' : 's'} left.`);
            }
           
        }
    }else{
        insereTexto('h1', 'Game Over!');
        insereTexto('p', 'You no have more attempts.');
        document.getElementById('chutar').setAttribute('disabled', true);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }

    limpaInput();
    count++;
}

// Função para limpar o valor do input
function limpaInput() {
    document.querySelector('input').value = '';
}

// Função para reiniciar o jogo
function reiniciarJogo() {
    count = 1;
    rotes = 3; // Reinicia o número de tentativas
    secret_number = getSecretNumber();
    inicializarTexto();
    document.querySelector('input').removeAttribute('disabled');
    document.getElementById('reiniciar').setAttribute('disabled', true);
    document.getElementById('chutar').removeAttribute('disabled');
    limpaInput();
}
