const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let nomeHeroi;
let qtdExpXp;
let nivelHeroi;

// Encapsulamos toda a lógica em uma função para poder chamá-la novamente
function executarDesafio() {
      console.clear()  
      console.log("=== SISTEMA DE NÍVEL DE HERÓI ===")  
      console.log("\n  --- Nova Classificação ---\n");

  rl.question('Digite o nome do Herói: ', (nome) => {
    nomeHeroi = nome;

    rl.question('Digite a quantidade de Experiência do herói: ', (xp) => {
      qtdExpXp = parseInt(xp, 10);

      // Analisando a quantidade de experiência do Herói
      if (qtdExpXp <= 1000) nivelHeroi = "Ferro";
      else if (qtdExpXp <= 2000) nivelHeroi = "Bronze";
      else if (qtdExpXp <= 5000) nivelHeroi = "Prata";
      else if (qtdExpXp <= 7000) nivelHeroi = "Ouro";
      else if (qtdExpXp <= 8000) nivelHeroi = "Platina";
      else if (qtdExpXp <= 9000) nivelHeroi = "Ascendente";
      else if (qtdExpXp <= 10000) nivelHeroi = "Imortal";
      else nivelHeroi = "Radiante";

      console.log(`O Herói de nome **{ ${nomeHeroi} }** está no nível de **{ ${nivelHeroi} }**`);

      // Pergunta se o usuário deseja continuar
      perguntarContinuar();
    });
  });
}

function perguntarContinuar() {
  rl.question('Deseja verificar outro herói? (S/N): ', (resposta) => {
    // Converte para maiúsculo para facilitar a comparação
    if (resposta.toUpperCase() !== 'N') {
            executarDesafio(); // Chama a função novamente
    } else {
      console.log("Encerrando o programa... Até mais!!!"); //Fecha o loop de classificação
      rl.close();
    }
  });
}

// Inicia a primeira execução
executarDesafio();
