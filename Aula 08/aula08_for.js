console.clear();
console.log();
const prompt = require('prompt-sync')();

// for (let i = 0; i < 10; i++) {
//     console.log("Isso é uma repetição!");
//     console.log(i);
// }


/*
let inicio = +prompt('A partir de que número você quer contar? ')
let final = +prompt('Até qual número você quer contar? ')
let incremento = +prompt('Usando quanto de incremento? ')

for (let i = inicio; i >= final; i = i - incremento) {
    console.log(`Essa é a repetição ${i}`);
}
*/



/*
let continuar = 's'

while (continuar == 's'){
    let fichas = +prompt('Quantas fichas você quer comprar?')
    for (let i = fichas; i >= 0; i--) {
        console.log(`Você ainda tem ${i} fichas`);
    }
    continuar = prompt('Você quer comprar mais fichas?');
}
*/


/*
// for...of
// Percorre um objeto iteravel (como uma lista) inteiro, ou seja, 
// vai repetir a quantidade de vezes necessária para passar por todos os elementos.
// Ele repete uma quantidade de vezes igual ao tamanho da lista.
// A cada repetição, a variável declarada recebe um valor da lista.
let filmes = ["Jurassic Park", "O Senhor dos Aneis", "Harry Potter", "Bacurau", "Clube da Luta","O Profissional","Miranha"];

for (let elemento of filmes) {
    console.log(elemento)
    console.log(`O tamanho dessa string é: ${elemento.length}`)
    console.log();
}



let numeros = [10,8,5,13,10,16];
let soma = 0

for (let i of numeros){
    soma = soma + 1
}
console.log(soma)

console.log();
*/


/*
// for...in
// Parecido com o for of, mas ao invés do valor, traz o índice do elemento.
let filmes = ["Jurassic Park", "O Senhor dos Aneis", "Harry Potter", "Bacurau", "Clube da Luta","O Profissional","Miranha"];

for (const index in filmes){
    console.log(`O filmes no índice ${index} é: ${filmes[index]}`);
}
*/



/*
//EXERCÍCIOS
// 3 - Faça um programa que peça um número e imprima toda a tabuada dele do 1 ao 10.

let num = +prompt('Digite o número para ver sua tabuada: ');

for(let i = 1; i <= 10; i++){
    console.log(`${num} * ${i} = ${num * i}`)
}
*/


/*
// 2 - Escreva um programa que peça um número e escreva o fatorial dele. Exemplo 6! = 6 x 5 x 4 x 3 x 2 x 1 = 720

let num = +prompt('Digite o número para ver o fatorial: ');
let result = 1;
let linha = ''

for (let i = num; i > 0; i--){
    result = result * i;
    if (i != 1){
        linha = linha + i + ' x '
    } else {
        linha = linha + i
    }
}

console.log(linha, '=', result)
*/




/*
// 3 - Peça ao usuário uma quantidade de linhas e e outra de colunas, e imprima essas informações na forma de uma tabela como no exemplo de 3 linhas e 4 colunas:
// [ 0, 1, 2, 3 ]
// [ 1, 2, 3, 4 ]
// [ 2, 3, 4, 5 ]
*/

let colunas = +prompt('Digite a quantidade de colunas: ');
let linhas = +prompt('Digite a quantidade de linhas: ');
// let matrix = [];
let lista = [];
let a = 0;

for (i = 0; i < linhas; i++){
    for (let i = a; i < colunas + a; i++){
        lista.push(i)
    }
    console.log(lista)
    // matrix.push(lista)
    lista = [];
    a++
}
console.log();

// for (let i in matrix){
//     console.log(matrix[i]);
// }
