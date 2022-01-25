console.clear();
console.log();
const prompt = require("prompt-sync")();


let alunoNovo = prompt('Digite o nome do(a) aluno(a) novo(a): ')

let nomes = [
               'Gabriel Lima Pereira', 
               'Danilo Diniz',
               'Eduardo Santos',
               'Leticia Pereira',
               'Iulia Mitch',
               alunoNovo
            ]

let idades = [18, 20, 21, 19, 16]

let indice = 0;

while (indice < nomes.length){
    console.log(`O indíce ${indice} contém o valor ${nomes[indice]}`)
    indice++
}

/*
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



console.log();