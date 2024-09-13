let count = 1;
let limite = 100;
let secret_number = parseInt(Math.random()*limite+1);

var_h1 = document.querySelector("h1");
var_h1.innerHTML = 'secret Number';
varP = document.querySelector('p');
varP.innerHTML = `escolha um numero de 0 a ${limite}:`;


function verificarChute(){
    let guess = document.querySelector('input').value;
    if(secret_number == guess){
        let word_attempts = count > 1 ? 'tentativas' : 'tentativa';
        var_h1.innerHTML = `Parabéns! Você venceu em ${count} ${word_attempts}.`
        document.getElementById('reiniciar').removeAttribute('disabled');
        varP.innerHTML = `voce gastou ${count} ${word_attempts}`;
    }else{
        if(guess > secret_number){
            varP.innerHTML = 'o numero é menor';
        } else {
            varP.innerHTML = 
            'o numero é maior';
        }
    }
    
    count++;
}