//Exemplo 01

const saudacao = (callback) => {
    const nome = "Guido";
    callback(nome)
}

const mensagem = (nome) => {
    console.log(`Bem vindo, ${nome}`)
}

saudacao(mensagem);

//Crie uma função, que recebe uma função callback como argumento
//Que por sua vez receba como argumento o nome e ou ano de nascimento do usuário
//Imprimir o nome, e se tiver a data de nascimento, imprimir o ano de nascimento

const dadosUsuario = (callback) => {
    const nome = "Guido";
    const idade = "31"
    callback(nome, idade)
}

const funcaoCallback = (nome, idade) => {
    console.log(`Olá ${nome}!`)

    if (idade) {
        const anoAtual = new Date().getFullYear();
        console.log(`Você nasceu em ${anoAtual - idade}.`)
    }
}

dadosUsuario(funcaoCallback);

//Crie uma função para calcular o IMC
//Ela deve receber 3 argumentos: altura, peso e uma função callback
//A função callback deve exibir o IMC e a faixa correspndente

const calcularIMC = (altura, peso, callback) => {
    const imc = peso / (altura * altura);
    let faixa;

    if (imc < 18) {
        faixa = "Desnutrição";
    } else if (imc >= 18 && imc <= 25) {
        faixa = "Normal";
    } else {
        faixa = "Sobrepeso"
    }

    callback(imc, faixa)
}

const dados = (imc, faixa) => {
    console.log(`Seu IMC é ${imc}.`)
    console.log(`Faixa correspondente: ${faixa}`)

}

calcularIMC(1.87, 101, dados);

//Crie uma funçao que receba uma array de objetos e um callback
//Cada array deve ter uma propriedade nome e stack
//A função callback deve permitir filtrar todos os resultados do array a stack de cada usuario
//A função que recebe o callback deve retornar todos os resultados encontrados

const professores = [
    {
        nome: "Guido",
        stack: "Back"
    },
    {
        nome: "Vidal",
        stack: "Back"
    },
    {
        nome: "Dani",
        stack: "Front"
    },
    {
        nome: "Ruli",
        stack: "Front"
    }
];

const buscador = (array, callback) => {
    const lista = [];
    let indice = 0;

    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            lista[indice] = array[i];
            indice++
        }
    }
    return lista;
}

const resultado = buscador(professores, (item) => {
    return item.stack === 'Back'
})

console.log(resultado);

//setTimeout
//É um método global do JS que executa uma função callback após um determinado tempo

const saudacaoTeste = () => {
    console.log(`Experimentando setTimeout`);
}

setTimeout(saudacaoTeste, 3000);

//Crie uma função que simule um microondas
//A função deve receber o tempo que vai esquentar e ao ser executada ela deve avisar que iniciou, após o tempo informado deverá ser avisado que finalizou

function microondas(tempo) {
    console.log("Iniciou...");

    setTimeout(() => {
        console.log("Finalizou!");
    }, tempo)
}

microondas(4000);

//Passando argumentos de uma função com setTimeout
const sauda = (nome) => {
    console.log(`Olá ${nome}!`);
}

setTimeout(sauda, 3000, "Marie");

//setInterval
//É um método global do JS que executa uma função callback de tempo em tempo até que seja interrompido.

let numero = 1;

const contador = () => {
    if (numero >= 5) {
        clearInterval(idSetInterval);
    }
    console.log(numero)
    numero++
}

const idSetInterval = setInterval(contador, 1000)

//Crie uma função que simule um microondas 2.0
//Mostrar a contagem do tempo

const microondas2ponto0 = (tempo) => {
    let numero = 1;

    console.log("Iniciou...");

    const contador = () => {
        console.log(numero);
        numero++;

        if (numero > tempo / 1000) {
            console.log("Finalizou!");
            clearInterval(id);
        }
    }

    const id = setInterval(contador, 1000);
}

microondas2ponto0(2000)
