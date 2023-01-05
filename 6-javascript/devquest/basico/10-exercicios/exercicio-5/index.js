/*
    Laços de repetição e operadores matemáticos

    Leia todos os passos com atenção. Não esqueça de quebrar o problema em pequenas partes para
    facilitar a implementação.

    1 - Crie um for que conte de 0 até 10

    2 - Dentro desse laço você deve dobrar o número atual.

    3 - Apresente a seguinte mensagem para cada número
    dentro do laço:
    "O dobro do número x é y"

    Dica: O x é o numero atual dentro do laço e o y é o dobro do x.

    Para apresentar esses textos use o console.log
*/

for(let index = 0; index <= 10 ; index++) {
    let dobro = index * 2
    console.log("O dobro de " + index + " é " + dobro)
}
