/* Faça um programa que leia um vetor de 20 posições e informe em quais índices o usuário 
digitou o valor zero?  */

let vetor = new Array(20);
var i = 0;
var posicoes = []
var j= 0;

while(i<20){
    vetor[i] = parseInt(window.prompt(`Adicione um numero na posicao ${i} do vetor: `));

    if(vetor[i] === 0){
        posicoes[j] = i;
        j++;
    }

    i++;
}

window.alert(`Valor zero foi digitado ${j}x nas seguintes posições ${posicoes}`);