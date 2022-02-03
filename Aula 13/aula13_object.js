const prompt = require('prompt-sync')();
console.clear();
console.log();

/*
// GAMBIARRA!!
// Um array não guarda o nome dos dados, apenas o índice.
let pessoa = ['Gabriel', 'Londrina', 18, 'Professor', 1.81]
let dados = ['Nome:', 'Cidade:', 'Idade:', 'Profissão:','Altura:']

for (let i in pessoa){
    console.log(dados[i],pessoa[i])
}
*/



/*
// Um objeto é definido por { }
// Cada propriedade é formada por 2 informações -> chave: valor.

let pessoa = { nome:'Gabriel', idade:20, cidade:'Londrina' };

console.log(`O nome é ${pessoa.nome} e a idade é ${pessoa.idade}`);


//Alterando uma propriedade de um objeto
pessoa.idade = 21;

console.log(`O nome é ${pessoa.nome} e a idade é ${pessoa.idade}`);


//Adicionando uma nova propriedade ao objeto
pessoa.empresa = 'Blue;'

pessoa.interesses = ['Programação', 'Jogos', 'Música', 'Livros', 'Filmes']

console.log(pessoa);

console.log();
// consigo percorrer com for porque não estou iterando sobre o objeto!!!
// Estou iterando sobre uma propriedade do objeto, que é uma array.
for (let i of pessoa.interesses){
    console.log(i);
}

console.log();

// Apagando uma propriedade de um objeto
delete pessoa.interesses;

console.log(pessoa);
*/




/*
// Um array de objetos!!!!
let gabriel = { nome:'Gabriel', idade:20, cidade:'Londrina' }
let alex = { nome:'Alex', idade:18, cidade:'São Paulo' }

let alunos = [gabriel, alex];

for (let i of alunos){
    console.log(i.nome);
    console.log(i.idade);
    console.log(i.cidade);
    console.log();
}
*/


/*
// Pegando chaves e valores aleatorios
let noticias = [
    {importancia: 1, noticia: 'O Alex acordou!'},
    {importancia: 2, noticia: 'Estourou uma guerra!'},
    {importancia: 3, noticia: 'O Cristiano Ronaldo empurrou a garrafa de coca.'}
]

let aleatorio = Math.trunc(Math.random()* 3);
let noticia_atual = noticias[aleatorio]

console.log(noticia_atual.noticia)
if(noticia_atual.importancia == 1){
    console.log('Não acontece muita coisa.')
} else if(noticia_atual.importancia == 2){
    console.log('Já dá uma zica.')
} else if(noticia_atual.importancia == 3){
    console.log('MEU DEUS.')
}

// console.log(alunos)
*/





// Métodos!

const pessoa = {
    nome: 'Gabriel',
    idade: 20,
    cidade: 'Londrina',
    empresa: 'Blue',
    interesses: ['Programação', 'Jogos', 'Música', 'Livros', 'Filmes'],

    bio: function(){
        console.log(`A pessoa ${this.nome} trabalha na empresa: ${this.empresa}`)
    },

    mudaEmpresa: function(){
        let novaempresa = prompt('Qual a nova empresa? ');
        this.empresa = novaempresa
    },

    getnome: function(){
        return this.nome;
    },

    setnome: function(nome){
        this.nome = nome
    }
};

// pessoa.bio()
// pessoa.mudaEmpresa();

// pessoa.bio()

console.log(pessoa.getnome());

let nome = prompt('Qual o novo nome? ')
pessoa.setnome(nome);
console.log(pessoa.getnome());

/*
// Exercícios

// Crie um sistema de cadastro de funcionários que deve criar um objeto novo 
// para cada funcionário cadastrado com as informações: nome, cargo e salário. 
// Ele deve armazenar todos esses objetos em uma lista. 
// Ao final de cada cadastro ele deve perguntar se deseja cadastrar um novo funcionário 
// e recomeçar o processo,

// e caso não haja mais funcionários para cadastrar, 
// ele deve chamar uma função que deve apresentar a quantidade de funcionários 
// com cada cargo e os nomes deles. (Você pode limitar as opções de cargo para facilitar.)



function contaFuncionarios(lista){
    let professores = [];
    let alunos = [];
    let qtprofessores = 0;
    let qtalunos = 0;
    
    for (let i of lista){
        if (i.cargo == 'professor'){
            qtprofessores++
            professores.push(i.nome)
        } else if (i.cargo == 'aluno'){
            qtalunos++
            alunos.push(i.nome)
        }
    }

    console.log('Quantidade de professores: ',qtprofessores);
    console.log('Quantidade de alunos: ',qtalunos);
    console.log();
    console.log('Professores:');
    for (let i of professores){
        console.log(i)
    }
    console.log();
    console.log('Alunos:')
    for (let i of alunos){
        console.log(i)
    }
}

let continuar = 's';
let listaDeFuncionarios = [];

while (continuar == 's'){
    let funcionario = {};

    funcionario.nome = prompt('Qual o nome? ');
    funcionario.cargo = prompt('Qual o cargo? ');
    funcionario.salario = +prompt('Qual o salário? ');

    listaDeFuncionarios.push(funcionario);

    continuar = prompt('Deseja cadastrar mais? ')
}

contaFuncionarios(listaDeFuncionarios)

*/