const calcularAnoDeNascimento = function(idade, mesDeNascimento, imprimir) {
    const mesAtual = 2
    let anoDeNascimento = 2023 - idade
    if(mesDeNascimento > mesAtual) anoDeNascimento-- // --incrementa negativamente assim como ++ positivamente
    imprimir(anoDeNascimento)
}

let imprimirAnoDeNascimento = anoDeNascimento => {
    console.log("Seu ano de Nascimento é " + anoDeNascimento)
}

calcularAnoDeNascimento(29, 9, imprimirAnoDeNascimento)

// ----------------- FUNÇÃO CHAMANDO FUNÇÃO PARA DIMINUIR SIGNIFICATIVAMENTE A QUANTIDADE DE CÓDIGO

function multiplicar(multiplicador) {
    return function(numero) {
        return numero * multiplicador
    }
}

let dobrar = multiplicar(2)
let triplicar = multiplicar(3)
let quadruplicar = multiplicar(4)

console.log(dobrar(5)) // 4
console.log(triplicar(5)) // 4
console.log(quadruplicar(5)) // 4