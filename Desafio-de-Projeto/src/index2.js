

const readline = require('readline');

// Criando uma interface readline para leitura de entrada e saída
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


// Inicializando as variáveis para resolver o desafio
let nomeHeroi;
let qtdExpXp;
let nivelHeroi;

// Função para perguntar o nome do herói
rl.question('Digite o nome do Herói: ', (nome) => {
  nomeHeroi = nome;
  
  // Função para perguntar a quantidade de experiência do Herói
  rl.question('Digite a quantidade de Experiência do herói: ', (xp) => {
  // Converte a entrada de string para número inteiro
    qtdExpXp = parseInt(xp, 10);
    
  // Testa o valor numérico para determinar o nível
    if(qtdExpXp <= 1000){
    nivelHeroi = "Ferro"
}else if(qtdExpXp >= 1001 && qtdExpXp <= 2000){
    nivelHeroi = "Bronze"
}else if(qtdExpXp >= 2001 && qtdExpXp <= 5000){
    nivelHeroi = "Prata"
}else if(qtdExpXp >= 5001 && qtdExpXp <= 7000){
    nivelHeroi = "Ouro"
}else if(qtdExpXp >= 7001 && qtdExpXp <= 8000){
    nivelHeroi = "Platina"
}else if(qtdExpXp >= 8001 && qtdExpXp <= 9000){
    nivelHeroi = "Ascendente"
}else if(qtdExpXp >= 9001 && qtdExpXp <= 10000){
    nivelHeroi = "Imortal"
}else if(qtdExpXp >= 10001){
    nivelHeroi = "Radiante"
}
    
  // Exibe a resposta final
console.log(`O Herói de nome **{ ${nomeHeroi} }** está no nível de **{ ${nivelHeroi} }**`);

    
  // Fecha a interface readline, encerrando o processo de entrada
    rl.close();
  });
});