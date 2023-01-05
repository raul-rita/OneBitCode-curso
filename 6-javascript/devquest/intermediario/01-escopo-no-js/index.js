// ESCOPO DE BLOCO , para estruturas de repetições sem funções o tipo VAR não cria esse escopo

if (true) {
    const mensagem = "Olá"
}

console.log(mensagem) // Quando ta fora não acessa a variável que está dentro do escopo. 

// ESCOPO DE FUNÇÃO - Também só funciona chamar variáveis dentro do escopo

function falar() {
    var mensagem = "Olá Mundo!"
    console.log(mensagem) // Esse aqui imprime
}

falar()
console.log(mensagem) // Esse não imprime

// ESCOPO GLOBAL - variáveis criadas fora de escopo funcionais e ou de qualquer estrutura tem acesso permitido
// globalmente.
var mensagem = "Olá Mundo!"

function falar() {
    console.log(mensagem) // Esse aqui imprime
}
falar()