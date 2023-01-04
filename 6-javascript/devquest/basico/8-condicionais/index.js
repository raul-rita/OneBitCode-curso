//IF , IF ELSE

let nomeFilme = "Vingadores"

if(nomeFilme === "Vingadores") {
    console.log("É o filme dos Vingadores")
} else if(nomeFilme === "Capitão América"){

}else {
    console.log("É outro filme")
}

// TERNÁRIO |  condicao ? console.log('condicao verdadeira') : console.log('condicao falsa')

true ? console.log("condição verdadeira") : console.log("condição falsa")

nomeFilme === "Vingadores" ? console.log("É o filme dos Vingadores") : console.log("É outro filme")

// SWITCH case

/*
    switch(parametro) {
        case valor1:
            bloco de declaracao
            break
        case valor2:
            bloco de declaracao
            break;
    }
*/

switch(nomeFilme) {
    case "Vingadores":
        console.log("É o filme dos Vingadoresss")
        break
    case "Capitão América":
        console.log("É o filme do Capitão Américaaa")
        break
    default:
        console.log("É outro filme")
        break
}