// Para declarar variaveis eu tenho: 
// let
// var 
// const

/*
comentarios
em 
muitas linhas
*/

// txt = string
let nomePessoa = "Victor";
console.log((nomePessoa), typeof (nomePessoa));

// numero = numbers
let idade = 25;
console.log(idade, typeof (idade));

let peso = 77.5;
console.log(peso, typeof (peso));

// valores lógicos = boolean
let autenticado = true;
console.log(autenticado, typeof (autenticado));

//email? , indefino
let email;
console.log(email, typeof (email));

//nulo = null
let nulo = null;
console.log(nulo, typeof (nulo));

//atribui valor a email
email = "vsuriani@tractian.com";
console.log(email, typeof (email));

//Variaveis constantes
const CPF = "45061222830";
console.log(CPF, typeof (CPF));

//COERÇÃO IMPLICITA= conversão de valores
let variavelQualquer = "3" + 2;
console.log(variavelQualquer, typeof (variavelQualquer));

//COERÇÃO EXPLICITA= conversão de valores

//Number()
let pontos = Number("120");
console.log(pontos, typeof (pontos));

//Boolean()
let valorLogico = "";
valorLogico = Boolean(valorLogico);
console.log(valorLogico, typeof (valorLogico));

//Pedir valor ao usuario = prompt
let nomeDigitado = prompt("Digite seu nome aqui: ");

//Alerta
alert(`Olá, ${nomeDigitado} ! Bem vindo`) // template string
