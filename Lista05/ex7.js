/* Faça um programa que construa um vetor de 8 posições de números inteiros, armazenando em 
sua primeira posição o valor 10, na segunda posição, o dobro do valor da primeira posição, 20, 
na terceira posição, o dobro do valor da segunda posição, 40, e assim por diante. Ao final, 
mostre o valor armazenado na 8ª posição e a soma de todos os valores armazenados no vetor.  */


let vetor = new Array(8);
vetor[0] = 10;
let soma = vetor[0];

for(let i = 1; i<8; i++){
    vetor[i] = vetor[i-1]*2;
    soma+= vetor[i];
}

console.log(`
Vetor inteiro: ${vetor}
Valor da última posição do vetor: ${vetor[7]}`);
console.log(`Soma de todos os elementos do vetor ${soma}`);
