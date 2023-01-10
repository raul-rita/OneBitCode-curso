// let inputPorClasse = document.getElementsByClassName('tag-de-input');

// console.log(inputPorClasse)

// let inputPorName = document.querySelectorAll("input[name='email']");

// console.log(inputPorName[0])

function adicionarComentario() {
    let inputComentaio = document.getElementsByName('novo-comentario') //criou um array com todos os novos comentarios

    let textoDigitado = inputComentaio[0].value //Pegou a primeira posição do array e mostrou o valor

    let novosComentarios = document.getElementById('novos-comentarios') //Pegou a nova div em branco

    novosComentarios.innerHTML += `<p>Novo comentário: ${textoDigitado} </p>` //adicionou um elemento HTML novo com o valor armazenado no input
}

function alterarCorDeFundoDoPrimeiroPost(){
    let posts = document.getElementsByClassName('post')

    let primeiroPost = posts[0]
    primeiroPost.style.backgroundColor = 'red'
}

function aumentarFonteSegundoPost() {
    let textoPosts = document.getElementsByClassName('texto-post')

    textoPosts[1].classList.add('fonte-grande')
}

function marcarRadio(genero){
    let radioMasculino = document.getElementById('genero-masculino')

    let radioFeminino = document.getElementById('genero-feminino')

    if(genero === 'M') {
        radioMasculino.checked = true
    } else if (genero === 'F'){
        radioFeminino.checked = true
    }
}