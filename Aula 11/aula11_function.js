const prompt = require('prompt-sync')();
console.clear();
console.log();

// Declarando a função: Estou 'ensinando' ao computador o que ele deve fazer.
// Eu só preciso ensinar uma vez! Depois posso usá-la quantas vezes for necessário.
// Basta chamar a função pelo nome.
// Enquanto apenas declaramos a função, ela não é executada nenhuma vez.
function va_tomar_banho(){
    console.log('Tirar a roupa suja');
    console.log('Abrir o chuveiro');
    console.log('Se ensaboar');
    console.log('Lavar o cabelo');
    console.log('Lavar o suvaco');
    console.log('Se enxaguar');
    console.log('Fechar o chuveiro');
    console.log('Se secar');
    console.log('Colocar uma roupa limpa');
}




/*
// Sem argumentos, apenas pergunta se está sujo
function verifica_sujeira(){
    let sujo = prompt('Está sujo(a)? ');
    if (sujo == 's'){
        va_tomar_banho();
    }
}

let pessoas = +prompt('Quantas pessoas estão em casa? ')

for(let i = 0; i < pessoas; i++){
    verifica_sujeira()
}
*/



/*
// Usando nomes em uma lista como argumento
function verifica_sujeira(nome){
    let sujo = prompt(`${nome} Está sujo(a)? `);
    if (sujo == 's'){
        va_tomar_banho();
    }
}

let pessoas = ['Gabriel','Bia','Lucas','Marcos']
for (let i of pessoas){
    verifica_sujeira(i)
}
*/


/*
function saudacao(){
    let nome = prompt('Qual o seu nome? ');
    let idade = prompt('Qual a sua idade? ')
    console.log();
    console.log(`Seja bem vindo(a) ${nome}!`);
    if (idade >= 18){
        console.log('Você é maior de idade');
    } else {
        console.log('Você é menor de idade');
    }
    console.log();
}
*/



/*
function saudacao(ano, nome = 'Aluno(a)', cidade = 'Londrina') {
	let idade = 2022 - ano;
    console.log();
    console.log(`Seja bem vindo(a) ${nome}!`);
    if (idade >= 18){
        console.log('Você é maior de idade');
    } else {
        console.log('Você é menor de idade');
    }
    console.log('Você mora em',cidade)
    console.log();
}

saudacao(2000, 'Gabriel', 'Londrina');


// let x = prompt('Qual o seu nome? ');
// let y = +prompt('Qual o seu ano de nascimento? ');
// let z = prompt('Qual a sua cidade? ')

// saudacao(y, undefined, z);
*/





// RETURN
// É a maneira de tirar um valor de dentro da função.
// Faz a função devolver um valor para que eu possa armazenar em uma variável
// ou fazer o que quiser com ele. 

function calculadora(a,b,c){
    let resultado
    if(c == '+'){
        resultado = a + b;
    } else if(c == '-'){
        resultado = a - b;
    } else if(c == '*'){
        resultado = a * b;
    } if(c == '/'){
        resultado = a / b;
    }
    // console.log(resultado);
    return resultado;
}


function supercalculadora(a,b,c){
    let resultado = [];
    resultado.push(a + b);
    resultado.push(a - b);
    resultado.push(a * b);
    resultado.push(a / b);
    return resultado;
}



let num1 = +prompt('Digite o 1º número: ');
let num2 = +prompt('Digite o 2º número: ');
let sinal = prompt('Digite qual operação deseja: ');

// A variável res vai receber o valor retornado da função pelo return.
let res = calculadora(num1,num2,sinal);
// let res = supercalculadora(num1,num2,sinal);

console.log(res)


// EXERCÍCIOS

/*
// Faça um programa, com uma função que necessite de três argumentos: 
// dois números e um sinal de operador matemático (+, -, * ou /). 
// Ela deve fazer o cálculo indicado pelo operador usando os dois números passados.

function calculadora(a,b,c){
    let resultado
    if(c == '+'){
        resultado = a + b;
    } else if(c == '-'){
        resultado = a - b;
    } else if(c == '*'){
        resultado = a * b;
    } if(c == '/'){
        resultado = a / b;
    }
    console.log(resultado)
}

let num1 = +prompt('Digite o 1º número: ');
let num2 = +prompt('Digite o 2º número: ');
let sinal = prompt('Digite qual operação deseja: ');

calculadora(num1,num2,sinal);
*/




/*
// Construa uma função que receba uma data no formato DD/MM/AAAA
// e devolva uma string no formato 'D de mesPorExtenso de AAAA'. 
// Valide a data e retorne NULL caso a data seja inválida.

function escreveData(data){
    let datasplit = data.split('/');
    let mes = datasplit[1];
    let meses = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro']
    console.log(`${datasplit[0]} de ${meses[mes-1]} de ${datasplit[2]}`)
}

// exemplo de data depois do split= [ '21', '01', '2022' ]

let data = prompt('Digite a data DD/MM/AAAA: ');
escreveData(data);
*/