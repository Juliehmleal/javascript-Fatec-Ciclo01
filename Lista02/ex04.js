const numero = parseInt(window.prompt("Digite um número inteiro: "));

const parOuImpar = (n) => {
    if(n%2 == 0)
    {
        return "par";
    }
    else{
        return "ímpar";
    }
}

window.alert(`Numero ${numero} é ${parOuImpar(numero)}`);


