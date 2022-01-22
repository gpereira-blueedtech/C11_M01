console.clear();
console.log();
const prompt = require("prompt-sync")();

// let num = 0;

// while (num <= 10) {
//   num = prompt("Digite um número maior que 10: ");
// }

// while (num <= 10) {
//     if (num < 0){
//         console.log('O número é negativo');
//         if(num < -10){
//             console.log('Muuuito negativo')
//             console.log('Vou resolver isso');
//             while (num < -10){
//                 console.log(num);
//                 num++
//             }
//         }
//     }
//     num = prompt('Digite um número maior que 10: ');
// }

// let senha;

// do {
//   senha = prompt("Digite a senha de acesso: ");
// } while (false);




/*
//Exercício 1

// Faça um programa que leia um nome de usuário e a sua senha
// e não aceite a senha igual ao nome do usuário, mostrando 
// uma mensagem de erro e voltando a pedir as informações.

console.log('Digite o seu nome: ')
let nome = prompt();
console.log('Digite sua senha: ')
let senha = prompt();

while (nome == senha){
    console.log('Dados inválidos.');
    console.log('Nome e senha devem ser diferentes.')

    console.log('Digite o seu nome: ')
    nome = prompt();
    console.log('Digite sua senha: ')
    senha = prompt();
}
*/


// Exercício 2

// Faça um programa que leia e valide as seguintes informações:
// Nome: maior que 3 caracteres;
// Idade: entre 0 e 150;
// Salário: maior que zero;
// Estado Civil: 's', 'c', 'v', 'd';


let nome = prompt('Digite seu nome: ');
while(nome.length <= 3){
    console.log('Nome inválido. Precisa ter mais de 3 caracteres.')
    nome = prompt('Digite seu nome: ');
}

let idade = prompt('Digite sua idade: ');
while(idade <=0 || idade > 150){
    console.log('idade inválida!');
    idade = prompt('Digite sua idade: ');
}

let salario = prompt('Digite seu salário: ');
while(salario <= 0){
    console.log('Salário inválido!')
    salario = prompt('Digite seu salário: ');
}

let estado = prompt('Digite seu estado civil: ').toLowerCase();
while(estado != 's' && estado != 'c' && estado != 'v' && estado != 'd'){
    console.log('Estado civil inválido.')
    estado = prompt('Digite seu estado civil: ').toLowerCase();
}