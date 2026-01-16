const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Helper para usar rl.question como Promise
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
  try {
    console.log("<<<<<<<<<<<<<<< CALCULADORA DE PARTIDAS RANQUEADAS >>>>>>>>>>>>>>>");

    const heroName = await ask('Digite o nome do Herói: ');

    const rawVictories = await ask('Digite a quantidade de Vitórias do Herói: ');
    const victories = parseInt(rawVictories, 10);
    if (Number.isNaN(victories)) {
      console.warn('Entrada de vitórias inválida, usando 0.');
    }

    const rawDefeats = await ask('Digite a quantidade de Derrotas do Herói: ');
    const defeats = parseInt(rawDefeats, 10);
    if (Number.isNaN(defeats)) {
      console.warn('Entrada de derrotas inválida, usando 0.');
    }

    const validVictories = Number.isNaN(victories) ? 0 : victories;
    const validDefeats = Number.isNaN(defeats) ? 0 : defeats;

    const playerBalance = verifyBalance(validVictories, validDefeats);
    const hankHero = position(playerBalance);

    console.log(`A atual classificação do Jogador é: ${playerBalance}`);
    console.log(`O Herói ${heroName} tem o saldo de -> ${playerBalance} e está no Nível -> ${hankHero}`);

  } catch (err) {
    console.error('Erro inesperado:', err);
  } finally {
    rl.close();
  }
})();