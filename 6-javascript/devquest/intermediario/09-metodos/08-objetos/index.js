let usuario = {
    nome: 'Raul',
    excluir: function() {
        console.log("O usuário, " + this.nome + " foi excluído!")
    }
}

usuario.excluir()