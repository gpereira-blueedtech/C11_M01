const prompt = require('prompt-sync')();
console.clear();
console.log();

/*
// ideia de acontecimento aleatório para o jogo.

function chuva(){
    console.log('Está chovendo');
}

let escolha = +prompt('Escolha sua ação: 1 - ir trabalhar.');
let aleatorio = 0;

while(true){
    if (escolha == 1){
        console.log('você foi trabalhar');
        aleatorio = Math.trunc(Math.random()* 100);
        console.log(aleatorio);
        if (aleatorio <= 10){
            chuva();
        }
        escolha = +prompt('Escolha sua ação: 1 - ir trabalhar.');
    } else {
        break;
    }
}
*/


/*
// É a maneira de enviar um dado para fora de uma função.
// Após o return, a função finaliza, por isso só é possível retornar um único dado.
// Assim como os argumentos são a única foram de passar um dado para dentro da função.
// Ou seja, nada entra e nada sai da função a não ser por argumento e return.

function calculaIdade(ano){
    let idade = 2022 - ano;
    if (idade >= 18){
        return true;
    } else {
        return false;
    }
}

function highlander(ano){
    let idade = 2022 - ano;
    if (idade >= 2000){
        console.log('Achamos o Highlander!!');
        let dados = [];
        dados.push(idade);
        let nome = prompt('Digite seu nome: ');
        dados.push(nome);
        let cidade = prompt('Digite sua cidade: ');
        dados.push(cidade);
        let altura = +prompt('Digite sua altura: ')
        dados.push(altura)

        return dados;
    }
}

let year = +prompt('Digite o ano do nascimento: ')

let verifica = highlander(year);
console.log(verifica)
*/

// let age = calculaIdade(year);

// if(age == true){
//     console.log('Você pode tomar cerveja!')
// } else {
//     console.log('Melhor ficar no refri.')
// }


/*
// Relógio simples

let hora = 6;
let minuto = 0;
let tempo = 0;

while(hora < 10){
    console.log(`São ${hora}:${minuto}`);
    tempo = +prompt('Quantos minutos quer adicionar? ');
    minuto += tempo;
    if (minuto >= 60){
        minuto = minuto - 60
        hora++
    }
}

*/