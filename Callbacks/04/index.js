

let tempoParaAlarmarEmSegundos = 10;
let tempoAlarmandoEmSegundos = 5;

const timer = (tempoParaAlarmarEmSegundos) => {
    let numero = 0;

    console.log(`Timer iniciado, disparando alarme em ${tempoParaAlarmarEmSegundos} segundos!`)

    const alarme = () => {

        const beep = () => {
            console.log('Beep beep!');
            numero++

            if ((numero * 1000) >= (tempoAlarmandoEmSegundos * 1000)) {
                clearInterval(id);
            }
        }

        const id = setInterval(beep, 1000);
    }

    setTimeout(alarme, (tempoParaAlarmarEmSegundos * 1000));

}

timer(tempoParaAlarmarEmSegundos)

