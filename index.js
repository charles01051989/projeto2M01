const prompt = require('prompt-sync')()
console.log("          <<<<JOKENPÔ>>>>       \n\n\n");
const listaDeOpcoes = ["Pedra","Papel","Tesoura"];
let vitoriaM = 0;
let vitoriaS = 0;
numeroDerodas = +prompt(`Escolha a quantidade de rodadas: `)
for (let rodadas = 0; rodadas < numeroDerodas; rodadas++) {
console.log(`\n-Digite [0] para ${listaDeOpcoes[0]}\n-Digite [1] para ${listaDeOpcoes[1]}\n-Digite [2] para ${listaDeOpcoes[2]}\n`)
escolhaSua = +prompt("Digite uma das opções acima: ")
console.clear()
while (escolhaSua!=0 &&escolhaSua!=1 && escolhaSua!=2) {
    console.log("Opção inválida\n")
    console.log(`-Digite [0] para ${listaDeOpcoes[0]}\n-Digite [1] para ${listaDeOpcoes[1]}\n-Digite [2] para ${listaDeOpcoes[2]}\n`)
    escolhaSua = +prompt("Digite uma das opções acima: ")
}
let escolhaMaquina = Math.floor(Math.random()*3)
if (escolhaSua == 0) {
    console.log(`\nVocê escolheu ${listaDeOpcoes[0]}\n`);
}
if (escolhaSua == 1) {
    console.log(`Você escolheu ${listaDeOpcoes[1]}\n`);
}
if (escolhaSua == 2) {
    console.log(`Você escolheu ${listaDeOpcoes[2]}\n`);
}
if (escolhaMaquina == 0){
    console.log(`O computador escolheu ${listaDeOpcoes[0]}\n`);
}
if (escolhaMaquina == 1){
    console.log(`O computador escolheu ${listaDeOpcoes[1]}\n`);
}
if (escolhaMaquina == 2){
    console.log(`O computador escolheu ${listaDeOpcoes[2]}\n`);
}    
if (escolhaSua==escolhaMaquina) {
    console.log(`EMPATE!\n`);
}
if (escolhaSua==0&&escolhaMaquina==1) {
    console.log(`[${listaDeOpcoes[0]} x ${listaDeOpcoes[1]}]\n Que pena, você PERDEU!\n `);
    vitoriaM++
}
if (escolhaSua==0&&escolhaMaquina==2) {
    console.log(`[${listaDeOpcoes[0]} x ${listaDeOpcoes[2]}]\n Boa, você GANHOU!\n `);
    vitoriaS++
}        
if (escolhaSua==2&&escolhaMaquina==1) {
    console.log(`[${listaDeOpcoes[2]} x ${listaDeOpcoes[1]}]\n Boa, você GANHOU!\n `);
    vitoriaS++
}    
if (escolhaSua==2&&escolhaMaquina==0) {
    console.log(`[${listaDeOpcoes[2]} x ${listaDeOpcoes[0]}]\n Que pena, você PERDEU!\n `);
    vitoriaM++
}    
if (escolhaSua==1&&escolhaMaquina==0) {
    console.log(`[${listaDeOpcoes[1]} x ${listaDeOpcoes[0]}]\n Boa, você GANHOU!\n `);
    vitoriaS++
}    
if (escolhaSua==1&&escolhaMaquina==2) {
    console.log(`[${listaDeOpcoes[1]} x ${listaDeOpcoes[2]}]\n Que pena, você PERDEU!\n `);
    vitoriaM++
}
console.log(`Escore parcial MÁQUINA ${vitoriaM} x ${vitoriaS} JOGADOR\n`);    
}
console.log("          <<<<FIM DO JOGO>>>>       \n\n\n");
if (vitoriaS>vitoriaM){
    console.log("VOCẼ É O CAMPEÃO");   
}else if (vitoriaS==vitoriaM) {
    console.log("O jogo terminou EMPATADO");
}else{
    console.log("VOCÊ PERDEU O JOGO");
}