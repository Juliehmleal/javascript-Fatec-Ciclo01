window.alert("Digite Idade de pessoas, digite -1 para sair");
var opcao=0;

let menor21 = 0;
let maior50 = 0;
let contador_pessoas = 0;
let total_idade = 0;

while(opcao > -1){
    opcao = parseInt(window.prompt("Digite uma idade"));

    if(opcao <= -1){
        break;
    }

    if(opcao<21){
        menor21++;
    }

    if (opcao>50) {
        maior50++;
    }

    contador_pessoas++;
    total_idade += opcao;
}

let media = (total_idade/contador_pessoas);

window.alert(`Media da idade: ${media.toFixed(2)}, Pessoas menores de 21 anos: ${menor21} e maiores de 51 anos: ${maior50}`);
