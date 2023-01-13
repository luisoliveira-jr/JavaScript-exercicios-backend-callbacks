const jogadores = ["Guido", "Dani", "Ruli", "Diego", "Vidal"];

//Cada rodada dura 10 segundos. 
//Para saber quanto tempo cada jogador terá para jogar, basta saber quantos jogadores participarão e dividir o tempo de cada rodada pela quantidade de jogadores, que no caso desse jogo é 10.

//Faça um programa que imprima o nome de cada jogador em seu devido momento.

let tempoTotal = 10000;
let qtdJogadores = jogadores.length
let tempoPorJogador = tempoTotal / qtdJogadores;

console.log(`Tempo por jogador ${tempoPorJogador / 1000} segundos`)

const cronometro = (qtdJogadores) => {
    let numero = 0;

    const contador = () => {
        console.log(jogadores[numero]);
        numero++

        if (numero >= qtdJogadores) {
            console.log("A rodada terminou!");
            clearInterval(id);
        }
    }

    const id = setInterval(contador, tempoPorJogador);
}

cronometro(qtdJogadores)