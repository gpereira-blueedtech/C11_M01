console.clear();
console.log();
const prompt = require('prompt-sync')();

/*
// indexOf
// Retorna o índice de um elemento passado como argumento
const filmes = ["Forrest Gump", "Jumanji", "Mad Max", "Interestelar"];
let filme = prompt('Digite o filme que quer encontrar: ')
let indicefilme = filmes.indexOf(filme);
console.log(indicefilme);
*/



/*
// split()
// separa um string em diversos elementos de uma array de acordo com um elemento passado
let data = prompt('Digite a data: ');
let dataseparada = data.split('/');
console.log(data);
console.log(dataseparada);
*/




/*
// .pop()
// Remove o último elemento de uma lista e me retorna.
const filmes = ["Forrest Gump", "Jumanji", "Mad Max", "Interestelar"];
let removidos = [];
console.log(filmes);
console.log(removidos);

removidos.push(filmes.pop());

console.log();
console.log(filmes);
console.log(removidos);

removidos.push(filmes.pop());

console.log();
console.log(filmes);
console.log(removidos);
*/



/*

// splice
// A partir de um índice determinado, ele pode remover, adicionar ou substituir elementos da array
const filmes = ["Forrest Gump", "Interestelar", "Jumanji", "Mad Max"];
console.log(filmes);

let filmesnovos = ["Titanic", "Jurassic Park", 'Matrix'];

// A partir do índice 2, remove 1 elemento, portanto, apenas o item de índice 2
// Feito isso, insere o elemento do 3º parâmetro
const filmesRemovidos = filmes.splice(2, 2, filmesnovos);

 
console.log();
console.log(filmes); // ["Forrest Gump", "Interestelar", "Titanic", "Mad Max"]
console.log();
console.log(filmesRemovidos);
*/



/*
// fill()
// Preenche os índices indicados com um valor passado
const filmes = ["Jumanji", "Mad Max", "Titanic", "Harry Potter", "Interestelar"];
console.log(filmes);

// Preenche a lista com "Mad Max" a partir do índice 1, parando quando
// chegar antes no índice 4, portanto, no índice 3
filmes.fill("Clube da Luta", 1, 3);

console.log(filmes); // ["Jumanji", "Mad Max", "Mad Max", "Mad Max", "Interestelar"]
*/