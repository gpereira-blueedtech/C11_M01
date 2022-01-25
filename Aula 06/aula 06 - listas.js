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

console.log(nomes);
console.log(idades);

// Retornando um elemento dentro da array
console.log(nomes[0]);

// Consultando o tamanho de uma string dentro da array
console.log(nomes[0].length);

// Salvando um elemento da array em outra variável
let nome_retirado = nomes[2];
console.log(typeof(nome_retirado));


console.log();