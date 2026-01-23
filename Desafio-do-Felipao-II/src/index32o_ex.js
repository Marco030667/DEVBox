// MÓDULO READLINE (leitura e escrita)
const readline = require('readline');

// ESTABELECE PROCESSOS LEITURA E ESCRITA
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// FUNÇÃO MAIN - PROCESSAMENTO DE BASE-(entradas e saídas)
(async function main() {
  console.log("<<<<<<<<<<<<<<< CALCULADORA DE PARTIDAS RANQUEADAS >>>>>>>>>>>>>>>");

  // <<<<<<<<<<  ENTRADAS  >>>>>>>>>>
  try {
    // RECEBE NOME DO HERÓI
    const heroName = await ask('Digite o nome do Herói: ');

    // RECEBE QUANTIDADE DE VITÓRIAS-(victories)
    const rawVictories = await ask('Digite a quantidade de Vitórias do Herói: ');
    const parsedVictories = parseInt(rawVictories, 10);
    const victories = Number.isNaN(parsedVictories) ? 0 : parsedVictories;
    if (Number.isNaN(parsedVictories)) {
      console.warn('Entrada de vitórias inválida — considerando 0.');
    }

    // RECEBE QUANTIDADE DE DERROTAS-(defeats)
    const rawDefeats = await ask('Digite a quantidade de Derrotas do Herói: ');
    const parsedDefeats = parseInt(rawDefeats, 10);
    const defeats = Number.isNaN(parsedDefeats) ? 0 : parsedDefeats;
    if (Number.isNaN(parsedDefeats)) {
      console.warn('Entrada de derrotas inválida — considerando 0.');
    }

    // RECEBE RESULTADO DA FUNÇÃO-(verifyBalance)
    const playerBalance = verifyBalance(victories, defeats);

    // RECEBE RESULTADO POSITION-(balanve)
    const hankHero = position(playerBalance);

    // Respostas enviadas ao Usuário
    console.log(`A atual classificação do Jogador é: ${playerBalance}`);
    console.log(`O Herói ${heroName} tem o saldo de -> ${playerBalance} e está no Nível -> ${hankHero}`);
  

    // <<<<<<<<<<  TRATAMENTO DE ERRO  >>>>>>>>>>
  } catch (err) { //Tratamento de erro no Sistema 
    console.error('Erro inesperado:', err);
  }})
  
//perguntarContinuar();

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< FUNÇÕES UTILITÁRIAS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// TRANSFORMA rl.question EM Promise PARA USAR [await] PARA AGUARDAR ENTRADA DE USUÁRIO
function ask(question) {
  return new Promise(resolve => rl.question(question, resolve));
}

// RESOLVE - DESEJA CONTINUAR OU NÃO
//function perguntarContinuar() {
  //rl.question('Deseja verificar outro herói? (S/N): ', (resposta) => {
    // Converte para maiúsculo para facilitar a comparação
    //if (resposta.toUpperCase() !== 'N') {
      //      main(); // Chama a função novamente
    //} else {
    //  console.log("Encerrando o programa... Até mais!!!"); //Fecha o loop de classificação
    //  rl.close();
    //  }
   // }
 // )
//};

// RESOLVE CÁLCULO SALDO (VITÓRIAS - DERROTAS)
function verifyBalance(victories, defeats) {
  return victories - defeats;
}

// RESOLVE NÍVEL A PARTIR DO SALDO-(balance)
function position(balance) {
  if (balance <= 10) return "Ferro";
  else if (balance <= 20) return "Bronze";
  else if (balance <= 50) return "Prata";
  else if (balance <= 80) return "Ouro";
  else if (balance <= 90) return "Diamante";
  else if (balance <= 100) return "Lendário";
  else return "Imortal";
}

