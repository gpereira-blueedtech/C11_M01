const prompt = require('prompt-sync')();
console.clear();
console.log();


/*
// REVISÃO
let objeto = {
    nome: 'Gabriel',
    idade: 20,
    cidade:'Londrina',

    mudaCidade: function(nova){
        this.cidade = nova
    },

    bio: function(){
        console.log(`O nome é ${this.nome}, tem ${this.idade} anos e mora em ${this.cidade}`);
    }
}


objeto.bio();

objeto.mudaCidade('Peruíbe');
console.log();

// Criando um novo método do objeto
objeto.envelhecer = function(anos){
    this.idade += anos
}

objeto.envelhecer(8);

objeto.bio();
*/



/*
// Exemplo de função síncrona - callbacks
// Uma função recebe a outra como argumento, e após terminar a execução desa primeira,
// Ela mesma chama a segunda.
function pizzaPronta(sabor) {
    console.log(`Sua pizza de ${sabor} está pronta.`);
}
  
function pedirPizza(callback) {
    const sabor = prompt('Escolha o sabor da sua pizza: ');
    callback(sabor);
}
  
pedirPizza(pizzaPronta);

*/



/*
// Exemplo promises
function primeiraFuncao(parametro) {
    return new Promise((resolve, reject) => {
        console.log(`Essa é a primeira função, ela escreve: ${parametro}`);
 
        resolve(parametro);
    });
}

function segundaFuncao(parametro) {
    return new Promise((resolve, reject) => {
        const novoparametro = parametro + 10;

        console.log(`Essa vai adicionar 10, totalizando: ${novoparametro}`);
 
        resolve(novoparametro);
    });
}

function terceiraFuncao(parametro) {
    return new Promise((resolve, reject) => {
        const novoParametro = parametro * 2;

        console.log(`Essa é a terceira função, ela dobra o valor: ${novoParametro}`);      

        resolve(novoParametro);
    });
}

function quartaFuncao(parametro) {
    return new Promise((resolve, reject) => {
        const novoParametro = parametro - 15;
 
        console.log(`Essa é a quarta função, subtraindo 15: ${novoParametro}`);
    
        resolve(novoParametro);
    });
}


let numero = +prompt('Informe o número: ')

primeiraFuncao(numero)
    .then(segundaFuncao)
    .then(terceiraFuncao)
    .then(quartaFuncao);
*/



/*
// Tratando erros
function alteraNome(parametro) {
    return new Promise((resolve, reject) => {
        parametro = parametro.toUpperCase();

        resolve(parametro);
    });
}

function escreveNome (parametro) {
    return new Promise((resolve, reject) => {
        console.log(`Aqui está o nome em MAIÚSCULAS: ${parametro}`);

        resolve(parametro);
    });
}

// O catch no final vai fazer o tratamento de exceção.
// Ou seja, indica o que será apresentado caso haja algum erro.
// Nesse caso ele apresenta uma mensagem ao usuário, e depois coloca a mensagem de erro original.
alteraNome(15)
    .then(escreveNome)
    .catch((err) => console.log('Alguma coisa deu errada no caminho...',err));
*/




// // Exemplo de aleatoriedade:
// function pneufurado(){
//     console.log('O pneu do seu carro furou.');
//     let trocarpneu = prompt('Você tem a habilidade para trocar o pneu? ');
//     if (trocarpneu == 's'){
//         console.log('você trocou o pneu e deu tudo certo.');
//     } else {
//         console.log('Você não conseguiu trocar o pneu e o assassino te pegou =(');
//     }
// }



// console.log('Digite sua escolha');
// console.log('0: ir trabalhar');
// let escolha = +prompt()

// if (escolha == 0){
//     let aleatorio = Math.floor(Math.random() * 10);
//     console.log('Você foi trabalhar');
//     console.log(aleatorio);
//     if (aleatorio == 1){
//         pneufurado()
//     } else {
//         console.log('Você chegou ao trabalho sem mais problemas.')
//     }
// }