//-----------------------VARIAVEIS DE NOME E XP DO HEROI--------------------------//
let nickname = "Rafael";
let xp = 7430;


//-----------------------VARIAVEL DE NIVEL DO HEROI-------------------------------//
let nivel;



//-----------------------ESTRUTURA DE DECISÃO PARA DETERMINAR O NIVEL DO HEROI PELA QUANTIDADE DE XP----------//
if (xp < 1000) {
    nivel = "Ferro";
}else if (xp >= 1001 && xp <= 2000){
    nivel = "Bronze";
}else if (xp >= 2001 && xp <= 3000){
    nivel = "Prata";
}else if (xp >= 5001 && xp <= 7000){
    nivel = "Ouro";
}else if (xp >= 7001 && xp <= 8000){
    nivel = "Platina";
}else if (xp >= 8001 && xp <= 9000){
    nivel = "Ascendente";
}else if (xp >= 9001 && xp <= 10000){
    nivel = "Imortal";
}else {
    nivel = "Radiante";
}

//----------------------SAIDA----------------------------//
console.log("O Herói de nome " + nickname + " está no nível de " + nivel);
