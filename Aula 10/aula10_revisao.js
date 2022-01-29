console.clear();
console.log();
const prompt = require('prompt-sync')();

// let só existe dentro do escopo onde ela é criada.
// Caso eu crie uma let em algum lugar, e outra dentro de outro escopo
// Elas serão variáveis diferentes, mesmo que com o mesmo nome.
// Na dúvida, NÃO REDECLARE! Depois de ter criado a sua variável uma vez,
// Quando você for usá-la das outras vezes, use apenas o nome da variável, sem o let.



/*
// Validando uma entrada:
// Usando o .toUpper() no final do prompt, ele já vai armazenar em maiúsculo
let pergunta = prompt('Responda apenas com S ou N: ').toUpperCase();

while (pergunta != 'S' && pergunta != 'N'){
    console.log('Entrada inválida!!! Use apenas S ou N.')
    pergunta = prompt('Responda apenas com S ou N: ');
}
*/



/*
// testando o retorno de typeof()

let nome = "Gabriel"
let numero = 15

let tipo = (typeof(numero));

console.log(typeof(numero));
console.log(typeof(tipo));
*/




/*
// Diferença entre var e let
let teste = 15;

if (teste == 15){
    var novaVar = 'nova var'
    let teste = 'novo let'
}

// Mesmo que a variável tenha sido declarada dentro do if,
// Como ela é do tipo var, ela funciona fora também.
console.log(novaVar);
console.log(teste);
*/




/*
// Transformando todas as strings de uma lista em maiúscula
let lista = ['Gabriel', 'Joao Vitor', 'Carlos'];
let listaUpper = [];

for(let elemento of lista){
    listaUpper.push(elemento.toUpperCase());
}

console.log(listaUpper);
*/



/*
// Validando números de uma maneira simples:

let numero = prompt('Digite um número: ');

console.log(typeof(numero))
while (isNaN(numero)){
    numero = prompt('Digite um valor válido! ');
}
*/


/*
//Diferença entre for in e for of

// For in percorre a lista retornando o ÍNDICE de cada elemento.
// Útil quando preciso desse índice para alguma coisa, por ex. usar em uma função ou método.
let lista = ['Gabriel', 'Joao Vitor', 'Carlos', 'Jamile', 'Bia'];
let nomeantigo = prompt('Digite o nome do nome a ser alterado: ');
let novonome = prompt('Digite o novo nome: ')

for (let i in lista){
    console.log(i);
    // console.log(lista[i]) // Retornando o valor a partid do índice.
    if (lista[i] == nomeantigo){
        lista.splice(i,1,novonome)
    }
    
}

console.log();
console.log(lista);



// For of percorre a lista retornando os VALORES de cada elemento.
// Útil para quando preciso apenas exibi-los ou armazená-los em algum lugar.
let lista = ['Gabriel', 'Joao Vitor', 'Carlos', 'Jamile', 'Bia'];

console.log('Lista dos alunos da C11: ');

for (let i of lista){
    console.log(i);
    // console.log(lista.indexOf(i)); //Retornando o índice a partir do valor
}
*/

console.log();