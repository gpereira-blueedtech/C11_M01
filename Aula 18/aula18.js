const prompt = require('prompt-sync')();
console.clear();
console.log();

let aluno = {
    nome: 'Daniel',
    turma: 'C11',
    idade: 20,
    cidade: 'Londrina',
    interesses: ['Cuidar do filho','Descansar'],

    trocaCidade: function(){
        let estado = prompt('É no mesmo estado? ')
        if (estado == 's'){
            let novacidade = prompt('Qual a nova cidade? ');
            this.cidade = novacidade
        }
    },

    trocaModulo: function(){
        let novomodulo = prompt('Qual o novo módulo? ')
        this.modulo = novomodulo
    },

    biografia: function(){
        console.log(`Nome: ${this.nome}
        Turma: ${this.turma}
        Idade: ${this.idade}`)
    }
}



// Adicionando um novo valor ao array dentro do objeto
// aluno.interesses.push('Comer');


// let escolha = prompt('Você quer trocar cidade ou módulo? ');
// if (escolha == 'c'){
//     aluno.trocaCidade();
// } else if (escolha == 'm') {
//     aluno.trocaModulo();
// } else {
//     console.log('Escolha inválida.')
// }
// aluno.biografia();


/*
// ifs aninhaos
let numero = +prompt('Escolha um número: ')
if (numero == 1) {
    let segundoNumero = +prompt('Agora escolha outro:')
    if (segundoNumero == 1){
        console.log('Você escolheu 1!');
    } else {
        console.log('Você escolheu outro')
    }
} else {
    console.log('Só pode escolher 1')
}
*/

// Usanhdo um for para percorrer uma lista
let itens = ['Espada','Escudo','Maça','Machado']
console.log('Escolha seu item: ')
for (let i of itens){
    console.log(i)
}

console.log();