const numero = parseInt(window.prompt("Digite um numero inteiro: "));

const verificaNum = (num) => {
    if (num>100){
        return "Maior que 100";
    } else {
        return "Menor que 100";
    }
}

window.alert(verificaNum(numero));