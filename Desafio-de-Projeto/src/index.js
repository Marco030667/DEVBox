
// Solução simples

let nomeHeroi = "Homem Aranha"
let qtdExpXp = 10500
let nivelHeroi = ""

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

console.log("O Herói de nome **{ " + nomeHeroi + " }**" + " Está no Nível " + "**{ " + nivelHeroi + " }**")