/*  Faça um programa que leia dois vetores A e B, cada um com 10 elementos inteiros. Depois, 
construa um vetor C, onde cada elemento de C é a soma dos respectivos elementos em A e B, 
ou seja: C[i] = A[i] + B[i].   */

var vetA = new Array(10);
var vetB = new Array(10);
var vetSoma = new Array(10);

//Inserindo numeros aleatoriamente no vetor
for(let i=0; i<10; i++ ) {
    vetA[i] = parseInt(Math.random() * 100);
    vetB[i] = parseInt(Math.random() * 100);
}

for(let i=0; i<vetSoma.length; i++){
    vetSoma[i] = vetA[i] + vetB[i];
}

console.log("Primeiro Vetor");
console.log(vetA);

console.log("Segundo Vetor");
console.log(vetB);


console.log("Vetor Soma")
console.log(vetSoma);