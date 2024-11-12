var numero = new Array(15);

for(let i=0; i<numero.length; i++ ) {
    numero[i] = parseInt(Math.random() * 100);
}

console.log("Array preenchido aleatoriamente");
console.log(numero);

let numeros_pares = [];
var j = 0;
console.log("Numeros pares do array")
for(let i=0; i<numero.length; i++){
    if(numero[i] % 2 === 0){
        numeros_pares[j] = numero[i];
        j++;
    }
}

console.log(numeros_pares)