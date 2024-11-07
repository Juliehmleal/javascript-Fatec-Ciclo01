let num1 = parseInt(window.prompt("Primeiro numero: "));

let num2 = parseInt(window.prompt("Segundo numero: "));

let diferença = []
let j=1;
for(let i = num1; i<=num2;i++){
    diferença[j] = i;
    j++;
}

window.alert(diferença);