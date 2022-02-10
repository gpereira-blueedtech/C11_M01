const prompt = require('prompt-sync')();
console.clear();
console.log();

// Função assíncrona
// async function funcaoAsync(){
//     return 'Blue';
// }

// funcaoAsync().then(console.log);

// Função síncrona
// function funcao(){
//     return 'Blue';
// }

// console.log( funcao() );




async function saudacao() {
    let promise = new Promise(resolve => {
      setTimeout(() => resolve('Olá!'), 3000);
    });

    let escrever = await promise;
    console.log(escrever);
}

saudacao();
console.log('Isso deve ser executado antes');
