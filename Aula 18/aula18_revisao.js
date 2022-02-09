const prompt = require('prompt-sync')();
console.clear();
console.log();

/*
let aluno = {
    nome: 'Daniel',
    turma: 'C11',
    idade: 20,
    cidade: 'Londrina',
    interesses: ['Cuidar do filho','Descansar'],
    forca: 10,

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
        Idade: ${this.idade}
        Força: ${this.forca}`)
    },

    envelhecer: function(anos){
        this.idade = this.idade + anos
    },

    aumentaForca: function(str) {
        this.forca = this.forca + str
    }
}


// aluno.biografia();

// let escolhaforca = +prompt('Aumentou quanto de força? ');
// aluno.aumentaForca(escolhaforca);
// aluno.envelhecer(30);

// aluno.biografia();
*/




/*
// Usando random para escolher um valor em uma array
let lista = ['Encontrar novo planeta','Explorar meteoro','Investigar anomalia'];
let navegacao = prompt('Deseja navegar? ')
if (navegacao == 's'){
    let rdm = Math.floor(Math.random() * 9);
    console.log(rdm);
    if (rdm <= 5){
        console.log(lista[0])
    }
}
*/




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


/*
// Usanhdo um for para percorrer uma lista
let itens = ['Espada','Escudo','Maça','Machado']
console.log('Escolha seu item: ')
for (let i of itens){
    console.log(i)
}
*/


/*
// Exemplo de controle de horas
let hora = 19
let dia = 1
console.log(hora);

function dataHora(){
    hora = hora + 4;
    if (hora >= 24){
        dia = dia + 1;
        hora = hora - 24;
    }
    console.log(`São ${hora} h do dia ${dia}`);
}

dataHora()
console.log(hora);
*/