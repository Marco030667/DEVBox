// Importando o módulo [readline] Leitura teclado Escrita de mensagens
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Helper: Transforma rl.question em Promise para usar [await] para esperar entrada usuário
function ask(question) {
  return new Promise(resolve => rl.question(question, resolve));
}

// Calcula saldo (vitórias - derrotas)
function verifyBalance(victories, defeats) {
  return victories - defeats;
}

// Determina nível a partir do saldo
function position(balance) {
  if (balance <= 10) return "Ferro";
  else if (balance <= 20) return "Bronze";
  else if (balance <= 50) return "Prata";
  else if (balance <= 80) return "Ouro";
  else if (balance <= 90) return "Diamante";
  else if (balance <= 100) return "Lendário";
  else return "Imortal";
}

(async function main() {
  console.log("<<<<<<<<<<<<<<< CALCULADORA DE PARTIDAS RANQUEADAS >>>>>>>>>>>>>>>");
  try {
    const heroName = await ask('Digite o nome do Herói: ');

    const rawVictories = await ask('Digite a quantidade de Vitórias do Herói: ');
    const parsedVictories = parseInt(rawVictories, 10);
    const victories = Number.isNaN(parsedVictories) ? 0 : parsedVictories;
    if (Number.isNaN(parsedVictories)) {
      console.warn('Entrada de vitórias inválida — considerando 0.');
    }

    const rawDefeats = await ask('Digite a quantidade de Derrotas do Herói: ');
    const parsedDefeats = parseInt(rawDefeats, 10);
    const defeats = Number.isNaN(parsedDefeats) ? 0 : parsedDefeats;
    if (Number.isNaN(parsedDefeats)) {
      console.warn('Entrada de derrotas inválida — considerando 0.');
    }

    const playerBalance = verifyBalance(victories, defeats);
    const hankHero = position(playerBalance);

    console.log(`A atual classificação do Jogador é: ${playerBalance}`);
    console.log(`O Herói ${heroName} tem o saldo de -> ${playerBalance} e está no Nível -> ${hankHero}`);
  } catch (err) {
    console.error('Erro inesperado:', err);

    perguntarContinuar();
  
  //} finally {
    //rl.close();

 // }})();

function perguntarContinuar() {
  rl.question('Deseja verificar outro herói? (S/N): ', (resposta) => {
    // Converte para maiúsculo para facilitar a comparação
    if (resposta.toUpperCase() !== 'N') {
            executarDesafio(); // Chama a função novamente
    } else {
      console.log("Encerrando o programa... Até mais!!!"); //Fecha o loop de classificação
      rl.close();
    }
  })}; //()
