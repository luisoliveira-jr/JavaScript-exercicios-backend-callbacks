tabuada = (array, imprimeResultado) => {
    fator = 0;

    for (let numero of array) {
        while (fator <= 10) {
            produto = numero * fator;
            resultado = `${numero} x ${fator} = ${produto}`;
            imprimeResultado(resultado);
            fator++
        };
        fator = 0;
        console.log("-------------------", "\n")
    }
};

tabuada([1, 5, 2], (resultado) => {
    console.log(resultado)
});