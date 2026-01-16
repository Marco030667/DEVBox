//console.log("<<<<<<<<<<<<<<< CALCULADORA DE PARTIDAS RANQUEADAS >>>>>>>>>>>>>>>");

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function calcular() {

let heroName;
let victories;
let defeats;
let valHank;
let nivelHero;

console.clear()  
console.log("=== SISTEMA DE NÍVEL DE HERÓI ===");
console.log("\n  --- Nova Classificação ---\n");


rl.question('Digite o nome do Herói: ', (hero) => 
    heroName = hero);

rl.question('Digite a quantidade de Vitórias do Herói: ', (qtdvic) => {
      victories = parseInt(qtdvic, 10)});

rl.question('Digite a quantidade de Derrotas do Herói: ', (qtddef) => {
      defeats = parseInt(qtddef, 10)});


let playerBalance = valHank;
let hankHero = nivelHero;

verifyBalance(victories , defeats);
position();

// Retorna o saldo do Jogador
console.log(`A atual classificação do Jogador é > + ${playerBalance}`);

console.log(`O Herói **{ ${heroName} tem o saldo de -> **{ ${playerBalance} }** E está no Nível -> **{ ${hankHero} }**`);

// Pergunta se o usuário deseja continuar
perguntarContinuar();

}

//------------------------------- Funções -----------------------------------------//

//Função para obter o saldo de vitórias do Herói
function verifyBalance(victories, defeats){
    valHank = victories - defeats
    return valHank
};

// Função para determinar o nível do Herói
function position(playerBalance){
    if(playerBalance <= 10) nivelHero = "Ferro";
        else if(playerBalance <= 20) nivelHero = "Bronze";
        else if(playerBalance <= 50) nivelHero = "Prata";
        else if(playerBalance <= 80) nivelHero = "Ouro";
        else if(playerBalance <= 90) nivelHero = "Diamante";
        else if(playerBalance <= 100) nivelHero = "Lendário";
        else nivelHero = "Imortal";
    
    return nivelHero
};

function perguntarContinuar() {
  rl.question('Deseja verificar outro Herói? (S/N): ', (resposta) => {
    // Converte para maiúsculo para facilitar a comparação
    if (resposta.toUpperCase() !== 'N') {
        console.clear()  
        console.log("=== SISTEMA DE NÍVEL DE HERÓI ===");
        console.log("\n  --- Nova Classificação ---\n");
        executarDesafio(); // Chama a função novamente
            
    } else {
      console.log("Encerrando o programa... Até mais!!!"); //Fecha o loop de classificação
      rl.close();
    }
  });
}

//Executa primeira vez a função
calcular()