/*
    Objetivo: Crie uma condição que verifica se um boleto está pago ou não e apresenta uma mensagem
    em cada caso. Para atingir esse resultado leia com atenção as regras abaixo:

    1 - Crie uma variável boletoPago e inicialize ela com false, ou seja, o boleto não está pago.

    2 - Seu código deve ter uma condição (if) verificando se a variável boletoPago é true ou false;

    3 - Se o boleto estiver pago apresente uma mensagem dizendo "O boleto está pago";

    4 - Se o boleto não estiver pago apresente uma mensagem dizendo "O boleto não está pago";

*/

const boletoPago = false

if(boletoPago === true) {
    alert("O boleto está pago!")
} else if(boletoPago === false){
    alert("Vai pagar esse boleto!")
}