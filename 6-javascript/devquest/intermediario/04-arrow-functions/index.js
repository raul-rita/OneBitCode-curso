/* SINTAXE DA ARROW FUNCTION */

let resultadoDaSoma = (num1, num2) => {
    return num1 + num2
}

console.log(resultadoDaSoma(12, 11))

// Quando tenho apenas 1 linha dentro do escopo podemos simplificar ainda mais 

let resultadoDaMultiplicacao = (num1, num2) => num1 * num2

console.log(resultadoDaMultiplicacao(5, 7))

// Quando é só 1 parametro pode ser da seguinte forma

let incentivarQuester = nomeQuester => {
    console.log("Parabéns " + nomeQuester + ", você já sabe o básico de JS!")
}

incentivarQuester("Raul")