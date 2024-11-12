/*Faça um programa que:  
a.  Declare um vetor de 10 posições de números inteiros.  
b.  Imprima os valores contidos nas posições do vetor.  
i. Quais valores foram exibidos? Você consegue explicar o motivo do programa exibir esses 
valores?  
c.  Preencha os índices pares do vetor com o valor 0 (ZERO) e os ímpares com o valor 1 (UM).  
d.  Imprima os valores contidos nas posições do vetor para validar se o item acima foi realizado 
com sucesso. */

var numero = new Array(10);

for(let i=0; i<numero.length; i++ ) {
    numero[i] = parseInt(Math.random() * 100);
}

console.log(numero);

for(let i=0; i<numero.length; i++ ) {
    if(numero[i] %2 === 0){
        numero[i] = 0;
    }else{
        numero[i] = 1;
    }
}

console.log(numero)