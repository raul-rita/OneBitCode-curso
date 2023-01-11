let frutas = ['banana', 'maçã', 'laranja', 'pêra']

// for(let i = 0; i < frutas.length; i++) {
//     console.log('Fruta: ' + frutas[i])
// }

// frutas.forEach((i) => {
//     console.log('Fruta: ' + i)
// })


/* MÉTODOS DO ARRAY */

frutas.push('manga') //adiciona elemento na última posição do array

frutas.pop() // retira elemento da última posição do array

frutas.shift() //remove o primeiro elemento do array

frutas.unshift('morango') //adciona o elemento na primeira posição do array

let posicaoLaranja = frutas.indexOf('laranja')

console.log(frutas)
console.log(posicaoLaranja)

/* SPLICE E SLICE */


let frutasExtraidas = frutas.slice(1,3) // cria um outro array como copia indicado pelo intervalo definido nos
// parametros

console.log(frutasExtraidas)

frutas.splice(1,2) // exclui do array original atraves da indicação do indice e a quantidade de elementos 
//definido pelo segundo valor

console.log(frutas)

frutas.splice(1,2, 'Goiaba', 'Abacaxi') // exclui do array original atraves da indicação do indice e a 
//quantidade de elementos definido pelo segundo valor e substitui pelos elementos indicadosnas proximas posições

console.log(frutas)