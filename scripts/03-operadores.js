//OPERADORES ARITMÉTICOS

let numeroA = 5;
let numeroB = 9;

console.log(`Numero A: ${numeroA}`);
console.log(`Numero B: ${numeroB}`);

//soma
let soma = numeroA + numeroB;
console.log(`Soma é: ${soma}`);

//multiplicação
let multi = numeroA * numeroB;
console.log(`Multiplicação é: ${multi}`);

//subtração
let sub = numeroA - numeroB;
console.log(`Subtração é: ${sub}`);

//divisão
let div = numeroA / numeroB;
console.log(`Subtração é: ${div}`);

// Operadores de incremento
let num = 6;
num = num + 1;

// decremento
let numb = 9;
numb = numb - 1;

//Operador unario
num++;
console.log(num);

//Operador pos fixado
console.log(num++);
console.log(num);

//Operador pre fixado
console.log(++num);
num--;
console.log(num);

//Operador de atribuição
num += 1;


let titulo = "<h1>Titulo</h1>";
let subtitulo = "<h2>Subtitulo</h2>";

let divMessage = document.getElementById("message");

divMessage.innerHTML = titulo;
divMessage.innerHTML += subtitulo;




