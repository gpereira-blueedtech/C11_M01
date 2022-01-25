console.clear();
console.log();
const prompt = require('prompt-sync')();

//Revisão While

/*
let nome = '';

while (nome == '') {
    console.log('Bem vindo ao cadastro da loja.');
    let continuar = prompt('Você já tem cadastro? ');
    if (continuar == 's'){
        break;
    }
    nome = prompt('digite seu nome: ');
    while (nome.length < 3){
        console.log('nome inválido');
        nome = prompt('digite seu nome: ');
    }
}
*/



/*
// O break é uma maneira de interromper a minha repetição 
// Mesmo antes de terminar toda a execução do código e testar novamente.
let jogo = 's'

while (jogo == 's'){
    console.log('Você está jogando');
    console.log('Você está passando por perigos terríveis!');
    console.log('Você foi picado por uma cobra!')
    let antidoto = prompt('Você tem o antídoto? ');
    if (antidoto == 'n'){
        console.log('que pena.');
        break;
    }
    console.log('Que bom que você tinha oi antidoto');
    console.log('Você continua sua jornada');
    console.log('Acabou o jogo.')
    jogo = prompt('Quer jogar de novo? ')
}
*/



/*
let jogo = 's'
let vidas = 3

while (jogo == 's'){
    console.log('Você está jogando');
    console.log('Você está passando por perigos terríveis!');
    console.log('Você foi picado por uma cobra!')
    let antidoto = prompt('Você tem o antídoto? ');
    if (antidoto == 'n'){
        console.log('Que pena. Você morreu');
        let continuar = prompt('Deseja jogar novamente? ')
        if (continuar == 's'){
            vidas = vidas - 1;
            console.log(`Você tem ${vidas} vidas sobrando`)
            if (vidas == 0){
                console.log('As vidas acabaram.')
                break;
            }
            console.log('Recomeçando')
            console.log();
            continue;
        } else {
            console.log('Obrigado por jogar.')
            break;
        }
    }
    console.log('Que bom que você tinha o antidoto');
    console.log('Você continua sua jornada');
    console.log('Acabou o jogo.')
    console.log();
    jogo = prompt('Quer jogar de novo? ')
}
*/

// A grande diferença entre o While e o do...while, é que no segundo caso
// O teste da condição é feito no final, ou seja, a execução do código
// será feita pelo menos uma vez obrigatóriamente.

// do {
//     console.log('Todo o meu jogo');
//     continuar = prompt('Deseja jogar novamente?');
// } while (continuar == 's')



