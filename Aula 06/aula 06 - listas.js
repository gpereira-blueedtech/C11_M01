console.clear();
console.log();
const prompt = require("prompt-sync")();

/*
let nomes = [
               'Gabriel Lima Pereira', 
               'Danilo Diniz',
               'Eduardo Santos',
               'Leticia Pereira',
               'Iulia Mitch',
            ]

let idades = [18, 20, 21, 19, 16]



console.log(nomes);
console.log(idades);


// Substituindo o valor de um elemento com o índice conhecido
nomes[1] = 'Joabe Costa'

console.log(nomes);

// O método indexOf retorna o índice de um elemento dentro da array
// Caso não seja encontrado, retorna -1
console.log();
console.log(nomes.indexOf('Gustavo Alves'));
console.log();

// Retornando um elemento dentro da array
console.log(nomes[0]);

// Consultando o tamanho de uma string dentro da array
console.log(nomes[0].length);


// Salvando um elemento da array em outra variável
let nome_retirado = nomes[2];
console.log(nome_retirado);


// Forma de percorrer uma array com while
// Não é a forma mais indicada, mas enquanto não aprendemos for, quebra nosso galho.
let indice = 0;

while (indice < nomes.length){
    console.log(`O indíce ${indice} contém o valor ${nomes[indice]}`)
    indice++
}

*/





/*
let nomes2 = [
    ['Gabriel Lima Pereira', 18, ['Filmes','Jogos']],
    ['Danilo Diniz', 20],
    ['Eduardo Santos', 16],
    ['Leticia Pereira', 18],
    ['Iulia Mitch', 20]
]

// console.log(['Gabriel Lima Pereira', 18][0]);
console.log(nomes2[0][0], nomes2[0][2][0]);

console.log(nomes2[0][2].indexOf('Filmes'));
*/




/*
// Funções de manipulação de arrays

let nomes3 = [
    'Gabriel Lima Pereira', 
    'Danilo Diniz',
    'Eduardo Santos',
    'Leticia Pereira',
    'Iulia Mitch',
]

console.log(nomes3);
console.log();

// // .length retorna o tamanho da array
//console.log(nomes3.length);

let continuar = 's'

while (continuar == 's'){
    let novoNome = prompt('Qual o novo nome? ')
    nomes3.push(novoNome);
    continuar = prompt('Deseja adicionar mais um nome? ')
}


console.log(nomes3);

console.log();
*/


// Exercícios

// Faça um Programa que leia 20 números inteiros
// e armazene-os num array. 
// Armazene os números pares no array PAR 
// e os números IMPARES no array IMPAR. 
// Imprima os três arrays.

let num;
let todos = [];
let pares = [];
let impares = [];
let contador = 1;

while (contador <= 20){
    num = +prompt(`Digite o ${contador}º número: `);
    todos.push(num);
    if (num % 2 == 0){
        pares.push(num)
    } else {
        impares.push(num)
    }
    contador++    
}
console.log();
console.log('Todos os números: ');
console.log(todos);

console.log();
console.log('Pares: ');
console.log(pares);

console.log();
console.log('Impares');
console.log(impares);