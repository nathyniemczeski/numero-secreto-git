alert ('Boas Vindas ao jogo Secreto');
let numeroSecreto = 2;
console.log (numeroSecreto);
let chute 

// enquanto o chute mão for o numero correto
while ( chute != numeroSecreto){
    chute = prompt ('Escolha um número de 1 a 10');

    //condições
    if ( chute == numeroSecreto ) {
        alert (`Isso ai! Você descobriu o numero secreto ${numeroSecreto}`);
    } else {
        if ( chute > numeroSecreto) {
    alert (`O número secreto é menor que o ${chute}`);
    } else {
        alert (`O número secreto é maior que o ${chute}`)
    }
    }
}

 