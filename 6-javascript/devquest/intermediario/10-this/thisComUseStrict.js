// 'use-strict'

let usuario = {
    nome: 'Raul',
    saudar: function() {
        console.log("this no contexto do método", this)
        console.log("this.nome no contexto do método", this.nome)

    }
}
usuario.saudar()

//----------------------------------------------

let comida = {
    nome: 'Brócolis',
    temperatura: 0
}

comida.cozinhar = function(temperaturaDeCozimento) {
    this.temperatura = temperaturaDeCozimento;
}

console.log(comida)

comida.cozinhar(100)

console.log(comida)