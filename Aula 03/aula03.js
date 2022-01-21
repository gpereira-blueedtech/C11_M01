console.clear()
const prompt = require('prompt-sync')();

/*
// BOOLEAN

// Usando === Estou comparando valor E tipo.
// Os dois precisam ser verdadeiros para retornar true.
const compara1 = 50 === '50';
const compara2 = 50 === 50;
const compara3 = 5 != '5';
const comparaString = 'Blue' !== 'Blue';

// Quando atribuo um valor de true ou false para uma variável,
// Ela se torna do tipo bool
let var1 = true;

console.log("compara1: ",compara1);
console.log("compara2: ",compara2);
console.log("compara3: ",compara3);
console.log("var1: ",var1);
console.log("comparaString: ",comparaString);
console.log(typeof(var1));
*/


/*
SE o Manoel estiver no Rio
Ele verá o jogo do Vasco
Senão, se estiver na Bahia, vai descansar
Senão, vai passear com a namorada.
*/

/*
let local = prompt('Onde o Manoel está? ');
let dinheiro = prompt('O Manoel tem dinheiro? ');

if (local == 'Rio' && dinheiro == 'Sim'){
    console.log('Vai ver o Vasco');
} else if (local == 'Rio' || dinheiro == 'Sim'){
    console.log('O Manoel vai levar a namorada num lugar bacana!')
} else if (local == 'Bahia'){
    console.log('Vai descansar.')
} else if (local == 'Londrina'){
    console.log('Ele estará no melhor lugar do sul do mundo.')
} else {
    console.log('Vai passear com a namorada.')
}

console.log();
console.log('Fim do programa.')
*/


/*
let var1 = 5 > 3 && 10 < 5; // Quando a condição é &&, TODAS tem que ser verdadeiras.
let var2 = 5 > 3 || 10 < 5; // Quando a condição é ||, apenas UMA precisa ser verdadeira.
console.log(var1);
console.log(var2);

// LÓGICA OU
// JOGO DO BRASIL OU SOLZAO NO DOMINGO = CHURRASCO
// TRUE  || TRUE   = TRUE
// TRUE  || FALSE  = TRUE
// FALSE || TRUE   = TRUE
// FALSE || FALSE  = FALSE

// LÓGICA E
// TEM QUE ACERTAR O USUÁRIO E A SENHA
// TRUE  && TRUE   = TRUE
// TRUE  && FALSE  = FALSE
// FALSE && TRUE   = FALSE
// FALSE && FALSE  = FALSE
*/


// const num1 = +prompt('Digite um número: ');
// const num2 = +prompt('Digite outro número: ');

// if (num1 === num2){
//     console.log('Os números são iguais. A condição é verdadeira.');
// } else {
//     console.log('Os números não são iguais. A condição é falsa.');
// }


/*
//EXERCÍCIO 1
// Faça um Programa que peça dois números e imprima o maior deles, e informe caso eles sejam iguais.

let num1 = +prompt('Digite um número: ');
let num2 = +prompt('Digite outro número: ');

if (num1 > num2){ 
    console.log('O maior número é',num1);
} else if (num1 < num2) {
    console.log(`O maior número é ${num2}`);
} else {
    console.log('OS números são iguais.')
}
*/


// EXERCÍCIO 2

// Faça um programa para a leitura de quatro notas parciais de um aluno. O programa deve calcular a média alcançada por aluno e apresentar:
// A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
// A mensagem "Em recuperação", se a média for entre cinco e sete;
// A mensagem "Reprovado", se a média for menor que cinco.


let nota1 = +prompt('Digite a nota 1: ');
let nota2 = +prompt('Digite a nota 2: ');
let nota3 = +prompt('Digite a nota 3: ');
let nota4 = +prompt('Digite a nota 4: ');

let media = (nota1 + nota2 + nota3 + nota4) / 4;


console.log(`O(a) aluno(a) ficou com ${media} de média`);
if (media >= 7){
    console.log('Resultado final: APROVAÇÃO!');
} else if (media >= 5){
    console.log('Resultado final: RECUPERAÇÃO!');
} else {
    console.log('Resultado final: REPROVAÇÃO!');    
}
