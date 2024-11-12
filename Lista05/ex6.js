/* Faça um programa que determine o maior e o menor entre N números. A condição de parada é 
a entrada de um valor 0, ou seja, o programa deve ficar calculando o maior e o menor até que a 
entrada seja igual a 0 (ZERO). No entanto, no final deste programa, apresente os números lidos, 
o maior e o menor número. O usuário poderá digitar no máximo até 100 números. */

var vetor = [];
var i = 0;
let maior = null;
let menor = null;

window.alert("Digite valores, aparte 0 para encerrar o programa e exibir o maior e o menor numero digitado");
while(escolha != 0){
    
    if(vetor.length>=100){
        break;
    }

    var escolha = parseInt(window.prompt("Digite um valor"));

    if(escolha == 0){
        break;
    }

    vetor[i] = escolha;
    
    if(vetor[i]>maior){
        maior = vetor[i];
    }

    if(vetor[i]<menor){
        menor = vetor[i];
    }

    i++;
}

window.alert(`Numeros inseridos ${vetor}, sendo o maior numero deles ${maior} e o menor ${menor}`);