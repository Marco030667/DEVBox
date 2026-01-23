const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// 1. Remova os parênteses extras para que a função possa ser chamada pelo nome
async function main() {
  console.log("\n<<<<<<<<<<<<<<< CALCULADORA DE PARTIDAS RANQUEADAS >>>>>>>>>>>>>>>");

  try {
    const heroName = await ask('Digite o nome do Herói: ');
    const rawVictories = await ask('Digite a quantidade de Vitórias do Herói: ');
    const victories = parseInt(rawVictories, 10) || 0;

    const rawDefeats = await ask('Digite a quantidade de Derrotas do Herói: ');
    const defeats = parseInt(rawDefeats, 10) || 0;

    const playerBalance = verifyBalance(victories, defeats);
    const hankHero = position(playerBalance);

    console.log(`O Herói ${heroName} tem o saldo de -> ${playerBalance} e está no Nível -> ${hankHero}`);

    // 2. Lógica para repetir a chamada
    const continuar = await ask('Deseja verificar outro herói? (S/N): ');
    if (continuar.toUpperCase() === 'S') {
      await main(); // CHAMA A FUNÇÃO NOVAMENTE
    } else {
      console.log("Encerrando o programa... Até mais!!!");
      rl.close();
    }

  } catch (err) {
    console.error('Erro inesperado:', err);
    rl.close();
  }
}

// <<<<<<<<<< FUNÇÕES UTILITÁRIAS >>>>>>>>>>

function ask(question) {
  return new Promise(resolve => rl.question(question, resolve));
}

function verifyBalance(victories, defeats) {
  return victories - defeats;
}

function position(balance) {
  if (balance <= 10) return "Ferro";
  else if (balance <= 20) return "Bronze";
  else if (balance <= 50) return "Prata";
  else if (balance <= 80) return "Ouro";
  else if (balance <= 90) return "Diamante";
  else if (balance <= 100) return "Lendário";
  else return "Imortal";
}

// Inicia o programa pela primeira vez
main();
