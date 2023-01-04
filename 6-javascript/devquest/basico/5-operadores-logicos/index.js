/*
    == | a == b | verdadeiro se ambos tiverem o mesmo valor 
    === | compara se as duas variaveis tem o mesmo tipo além do valor

    != | DIFERENTE -  verifica se o valor das duas variaveis são diferentes
    !== | NÃO IDENTICO - verifica se o tipo e valor das 2 variaveis não são identicos (sim=false, nao=true)

    < | a < b | MENOR- true quando A for menor que B
    <= | MENOR IGUAL - true quando A for menor ou igual a B

    > | a > b | MAIOR- true quando A for maior que B
    >= | MAIOR IGUAL - true quando A for maior ou igual a B
*/

const a = 3
const b = "3"
const c = 5

console.log(a < c)

/*
    && - a verificação só será verdadeira quando o valor das comparações forem true

    || - a verificação só será falsa quando ambas as comparações forem false

    ! - NOT - inverte a expressão
*/

const num1 = 2
const num2 = 2

console.log(num1 === num2 && num1 <= num2)
console.log(num1 === num2 || num1 <= num2)