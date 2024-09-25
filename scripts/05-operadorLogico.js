let email = "a@b.com"
let senha = "123"

let emailDigitado = prompt("Digite o seu email:");
let senhaDigitada = prompt("Digite a sua senha:");

console.log(`Verificação do e-mail: ${emailDigitado == email}`);
console.log(`Verificação da senha: ${senhaDigitada == senha}`);

let statusLogin = (emailDigitado == email) && (senhaDigitada == senha);
console.log(`Status de login: ${statusLogin}`);





