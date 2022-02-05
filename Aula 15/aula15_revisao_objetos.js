const prompt = require('prompt-sync')();
console.clear();
console.log();


/*
const pessoa = {
    nome: 'Gabriel',
    idade: 20,
    cidade: 'Londrina',
    interesses: {filmes: ['Ficção', 'Aventura','Ação'], música: 'Bolero', livro:'Harry Potter'}
};

console.log(`O nome é: ${pessoa.nome}, 
tem ${pessoa.idade} anos 
e é de ${pessoa.cidade}
e gosta de ${pessoa.interesses}`);

pessoa.idade = 21;
console.log();

console.log(`O nome é: ${pessoa.nome}, 
tem ${pessoa.idade} anos 
e é de ${pessoa.cidade}
e gosta de filmes de:`);

for (let i of pessoa.interesses.filmes){
    console.log(i);
}
*/

const pessoa = {
    nome: 'Gabriel',
    idade: 20,
    cidade: 'Londrina',
    dia: 1,
    hora: 22,

    biografia: function() {
        console.log(`O nome é ${this.nome}, idade ${this.idade} e vem de ${this.cidade}`);
        console.log(`A hora é ${this.hora}`);
        console.log(`O dia é ${this.dia}`)
    },

    envelhecer: function(years){
        this.idade = this.idade + years;
    },

    getNome: function(){
        return this.nome
    },

    passaHora: function(){
        this.hora++
        if (this.hora >= 24){
            this.hora = this.hora - 24
            this.dia++
        }
    }
};

// pessoa.biografia();

// let anos = +prompt('Quantos anos ele vai envelhecer? ');
// // pessoa.envelhecer(anos);
// // console.log();

// // Funciona da mesma forma que o método.
// // Porém com o método é mais seguro.
// // Ele pode ter validações de segurança e de tipo antes de alterar o valor.
// pessoa.idade = pessoa.idade + anos;

// pessoa.biografia();

/*
// Acessando um valor através de um método
let nomeDoObjeto = pessoa.getNome();
console.log(nomeDoObjeto);

// // Funciona da mesma forma que o método.
// // Porém com o método é mais seguro.
// // Ele pode ter validações de segurança e de tipo antes de alterar o valor.
// console.log(pessoa.nome)
*/



/*
// Pegando as chaves e valores de um objetos:
const pessoaChavesValores = Object.entries(pessoa);
const pessoaChaves = Object.keys(pessoa);
const pessoaValores = Object.values(pessoa);

// console.log(pessoaChavesValores);
// console.log();
// console.log(pessoaChaves);
// console.log();
// console.log(pessoaValores);

for (let i of pessoaChavesValores){
    console.log(`A chave é: ${i[0]} e o valor: ${i[1]}`);
}
console.log();
for (let i in pessoaChaves){
    console.log(`A chave é: ${pessoaChaves[i]} e o valor: ${pessoaValores[i]}`);
}
*/

pessoa.biografia();

pessoa.passaHora();
console.log();

pessoa.biografia()

console.log();


