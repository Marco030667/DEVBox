const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// 1. Remova os parênteses extras para que a função possa ser chamada pelo nome
async function main() {
  console.log("\n<<<<<<<<<<<<<<< CALCULADORA DE PARTIDAS RANQUEADAS >>>>>>>>>>>>>>>");

  try {

//############################################################################
    // SOLICITA NOME DO HERÓI
    const heroName = await ask('Digite o nome do Herói: ');
    
    // SOLICITA NÚMERO DE VITÓRIAS
    const preVictories = await ask('Digite a quantidade de Vitórias do Herói: ');
    const victories = parseInt(preVictories, 10) || 0;

    // SOLICITA NÚMERO DE DERROTAS
    const preDefeats = await ask('Digite a quantidade de Derrotas do Herói: ');
    const defeats = parseInt(preDefeats, 10) || 0;

//#################################################################################

    // RECEBE VALOR (vitórias - derrotas)
    const playerBalance = verifyBalance(victories, defeats);

    // RECEBE POSIÇÃO DO HERÓI NO RANQUE
    const hankHero = position(playerBalance);

//#################################################################################

    // MOSTRA RESULTADO FINAL DO RANQUE
    console.log(`O Herói ${heroName} tem o saldo de -> ${playerBalance} e está no Nível -> ${hankHero}`);

//#################################################################################

    // EXECUTA DESEJA CONTINUAR
    const continuar = await ask('Deseja verificar outro herói? (S/N): ');
    if (continuar.toUpperCase() === 'S') {
      console.clear();
      await main(); // CHAMA A FUNÇÃO NOVAMENTE
    } else {
      console.clear();
      console.log("Encerrando o programa... Até mais!!!");
      rl.close();
    }

    // TRATA O ERRO DE SISTEMA SE HOUVER
  } catch (err) {
    console.error('Erro inesperado:', err);
    rl.close();
  }
}

//####################################################################################

// <<<<<<<<<< FUNÇÕES UTILITÁRIAS >>>>>>>>>>

// CONVERTE A QUESTÃO EM PROMISE
function ask(question) {
  return new Promise(resolve => rl.question(question, resolve));
}

// CALCULA RANQUE NUMÉRICO DO HERÓI
function verifyBalance(victories, defeats) {
  return victories - defeats;
}

// CALCULA POSIÇÃO DO HERÓI PELO NÚMERO DO RANQUE
function position(balance) {
  if (balance <= 10) return "Ferro";
  else if (balance <= 20) return "Bronze";
  else if (balance <= 50) return "Prata";
  else if (balance <= 80) return "Ouro";
  else if (balance <= 90) return "Diamante";
  else if (balance <= 100) return "Lendário";
  else return "Imortal";
}

// PRIMEIRA EXECUÇÃO...
main();
