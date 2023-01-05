/*
    Unindo variáveis e condições!

    1 - Apresente uma pop up de confirmação (pode ser usado o prompt mas existe outro método melhor para
    isso) logo que o usuário acessar o site com a uma mensagem para o aventureiro escolher as opções ok
    ou cancelar, a mensagem deve ser "Seja bem vindo(a), aventureiro(a)! Gostaria de pagar R$ 50,00 para passar
    a noite na nossa hospedagem?";

    2 - Se o aventureiro escolher passar a noite apresente a mensagem "Ótimo! Nós temos as melhores camas
    de toda a região!";

    3 - Se o aventureiro escolher NÃO passar a noite apresente a mensagem "Que pena! Você parecia ser
    uma pessoa mais legal";

    Lembre-se que para atingir esse resultado você vai precisar utilizar variáveis e uma condição!
*/

const confirmarHospedagem = confirm("Seja bem vindo(a), aventureiro(a)! Gostaria de pagar R$ 50,00 para passar a noite na nossa hospedagem?")

// if(confirmarHospedagem) {
//     alert("Ótimo! Nós temos as melhores camas de toda a região!")
// } else {
//     alert("Que pena! Você parecia ser uma pessoa mais legal!")
// }

if(confirmarHospedagem === true) {
    alert("Ótimo! Nós temos as melhores camas de toda a região!")
}else {
    alert("Que pena! Você parecia ser uma pessoa mais legal!")
}