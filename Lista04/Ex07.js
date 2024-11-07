window.alert("Verificação de qual o maior numero inserido, digite 0 para terminar o programa")
let opcao = parseInt(window.prompt("Digite o primeiro numero"));
let maior = opcao;
let menor = opcao;

while (opcao != 0){
    if(maior <= opcao){
        maior = opcao;
    }

    if(menor >= opcao){
        menor = opcao;
    }

    opcao = parseInt(window.prompt("Digite um numero"));
}

window.alert(`Maior: ${maior} Menor: ${menor}`);