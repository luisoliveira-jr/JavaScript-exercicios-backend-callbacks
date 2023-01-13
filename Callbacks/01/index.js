tabuada = (numero, imprimeResultado) => {
    index = 0;
    resultado = [];

    while (index <= 10) {
        valor = numero * index;
        resultado.push(valor);
        index++
    };

    imprimeResultado(resultado);
}

tabuada(5, (resultado) => {
    idx = 0;
    for (let valor of resultado) {
        console.log(`${resultado[1]} x ${idx} = ${valor}`)
        idx++
    }

})
