

let tempoParaAlarmarEmSegundos = 10;
let tempoAlarmandoEmSegundos = 5;

let tempoSonecaEmSegundos = 10;
let numeroDeSonecas = 2;

let desativarSoneca = 0;

const timer = (tempoParaAlarmarEmSegundos) => {
    let numero = 0; //Contador para interromper o beep depois no tempo determinado

    //Aviso inicial
    console.log(`Timer iniciado, disparando alarme em ${tempoParaAlarmarEmSegundos} segundos!`)

    //Função alarme: setTimeout que define o tempo de espera para iniciar o alarme.
    const alarme = () => {

        //Função beep imprime o "Beep beep!" 1 vez por sengundo dentro do tempo estipulado em tempoAlarmandoEmSegundos
        const beep = () => {
            console.log('Beep beep!');
            numero++

            if ((numero * 1000) >= (tempoAlarmandoEmSegundos * 1000)) {
                clearInterval(id);
                soneca(tempoSonecaEmSegundos)
            }
        }

        const id = setInterval(beep, 1000);
    }

    setTimeout(alarme, (tempoParaAlarmarEmSegundos * 1000));
}

const soneca = (tempoSonecaEmSegundos) => {
    let numero = 0; //Contador para interromper o beep depois no tempo determinado

    //Aviso inicial
    console.log(`Soneca ativada, próximo alarme em ${tempoSonecaEmSegundos} segundos.`)

    //Função alarme: setTimeout que define o tempo de espera para iniciar o alarme.
    const alarme = () => {

        //Função beep imprime o "Beep beep!" 1 vez por sengundo dentro do tempo estipulado em tempoAlarmandoEmSegundos
        const beep = () => {
            console.log('Beep beep!');
            numero++

            if ((numero * 1000) >= (tempoAlarmandoEmSegundos * 1000)) {
                clearInterval(id);
                desativarSoneca++
                if (desativarSoneca >= numeroDeSonecas) {
                    console.log(`Fim do Timer!`)
                } else {
                    soneca(tempoSonecaEmSegundos)
                }
            }
        }

        const id = setInterval(beep, 1000);
    }

    setTimeout(alarme, (tempoSonecaEmSegundos * 1000));
}

timer(tempoParaAlarmarEmSegundos)
