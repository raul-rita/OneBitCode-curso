// let selectDeEstado = document.querySelector("select[name='estado']")

// selectDeEstado.addEventListener('change', function(){alert("Mudou o select")})

// console.log(selectDeEstado)


document
    .querySelector("select[name='estado']")
    .addEventListener(
        'change',
        function(event) {
            console.log(event.target.value)
        }
    )