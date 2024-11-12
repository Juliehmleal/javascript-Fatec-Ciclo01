/* Faça um programa que determine o maior entre N números. A condição de parada é a entrada 
de um valor 0, ou seja, o programa deve ficar calculando o maior até que a entrada seja igual a 
0 (ZERO). No final do programa, mostre o maior número. */

var vetor = [];
var i = 0;
let maior = null;

window.alert("Digite valores, aparte 0 para encerrar o programa e exibir o maior numero digitado");
while(escolha != 0){
    var escolha = parseInt(window.prompt("Digite um valor"));

    if(escolha == 0){
        break;
    }

    vetor[i] = escolha;
    
    if(vetor[i]>maior){
        maior = vetor[i];
    }

    i++;
}

window.alert(`Numeros inseridos ${vetor}, sendo o maior numero deles ${maior}`);