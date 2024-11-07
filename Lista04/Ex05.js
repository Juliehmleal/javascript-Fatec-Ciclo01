const escolha = parseInt(window.prompt("Digite um numero: "));

/*
for(let i=1; i<11; i++){
    window.alert(`${escolha}  x  ${i} = ${escolha*i}`)

}
*/

let tabuada = [];
let j=0;
for(let i=1; i<11; i++){
    tabuada[j] = i*escolha;
    j++;
}

window.alert(tabuada);