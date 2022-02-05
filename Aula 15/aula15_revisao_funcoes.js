const prompt = require('prompt-sync')();
console.clear();
console.log();



function maiuscula(a){
    let mai = a.toUpperCase();
    return mai;
}

function validanome(nome_final){
    console.log('O nome é:',nome_final);
}
/*
// 3 passos: Pego o nome, passo para a variável que transforma em maiúscula
// armazeno esse nome em maiuscula em uma variavel
// passo essa variavel como argumento de outra função
let name = prompt('Digite seu nome: ');

let namemaiusc = maiuscula(name);

validanome(namemaiusc);
*/

/*
// Mesma coisa mas com 2 passos:
// pego o nome, passo como argumento de uma função que vai transformar em maiúscula
// e passo o retorno dessa função já como argumento da próxima.
// Não precisei armazenar o resultado em uma veriável antes
let name = prompt('Digite seu nome: ');

validanome(maiuscula(name));
*/




function validaIdade(year){
    let idade = 2022 - year;
    console.log(idade);
    if (idade >=18){
        console.log('Você é maior de idade!');
        return true;
    } else {
        console.log('Você é menor de idade!');
        return false;
    }
}


/*
let ano = +prompt('Digite o ano que você nasceu: ')
let autoriza = validaIdade(ano);

if (autoriza){
    console.log('Você está liberado para entrar.');
} else {
    console.log('Você não está autorizado.');
}
*/

/*
// Usando uma função para validar todos os elementos de uma lista
let listaanos = [2010, 1990, 1985, 2015, 2000];

for (let i of listaanos){
    validaIdade(i);
}
*/

/*
//forEach é uma maneira de rodar uma função para cada elemento em uma lista.
// Ele vai pegar cada elemento e passar para a função com 3 argumentos NESSA ORDEM:
// valor, índice, array inteira. 

function listavalores(a,b,c){
    console.log(`O valor do índice ${b} é ${a}.`)
    console.log(c);
    console.log();
}

listaidade.forEach(listavalores);
*/




/*
function somalista(a, b, c, d, e){
    let resultado = a + b + c + d + e
    console.log(resultado);
    return resultado;
}

let numeros = [13, 15, 18, 20, 30];

// somalista(numeros[0], numeros[1], numeros[2], numeros[3], numeros[4])

// Mesma coisa, de uma maneira mais fácil
somalista(...numeros)
*/






// while(!autoriza){
//     console.log('Você não está autorizado!')

//     autoriza = validaIdade();
//     if(autoriza){
//         console.log('Agora sim! ')
//     }
// }




/*
// function calculadora (a, b){
//     let resultado = a + b;
//     return resultado;
// }

// Mesma coisa que a função acima, usando arrow functions:
const calculadora = (a, b) => a + b;


// calculadora();
// console.log(calculadora());

let num1 = +prompt('Digite um número: ');
let num2 = +prompt('Digite outro número: ');
let soma = calculadora(num1, num2);
console.log(soma);
*/





/*
let somas = +prompt('Quantos números quer somar? ');
let listasomas = [];

for (let i = 0; i < somas; i++){
    listasomas.push(calculadora());
}

// console.log(listasomas);
for (let i of listasomas){
    console.log(i);
}
*/


/*
let lista = [
    {nome: 'Gabriel', idade: 18},
    {nome: 'Lucas', idade: 20}
]

console.log(lista[0].idade);
*/