let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo do Numero Secreto';

let paragrafo = document.querySelector('p');
titulo.innerHTML = 'Escolha um numero de 1 a 10';

function exibirTextoTela (tag, texto); {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;

}

exibirTextoTela('h1', 'Jogo do Numero Secreto');
exibirTextoTela('p', 'Escolha um numero de 1 a 10');

function verificarChute(){
    let chute = document.querySelector('iput').value;

    if ( chute == numeroSecreto){
        exibirTextoTela('h1', 'Voce acertou!');
    }
}

