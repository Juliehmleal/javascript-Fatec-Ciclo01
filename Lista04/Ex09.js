window.alert("Bem vindo ao Jogo de luta, selecione uma das opções que serão exibidas a seguir");
var chute = 0;
var soco = 0;
var magia = 0;
var total_pontos = 0;
var opcao = 0;

if (isNaN(opcao)) {
    window.alert("Erro");
}else{
    while(opcao > -1){
        opcao = parseInt(window.prompt("5 - chute, 6 - soco, 7 - magia, 0 para sair"));

        if (opcao == 0) {
            break;
        }
    
        switch (opcao) {

            case 5:
                chute += 2;
                window.alert("Você deu um chute, 2 pontos!");
                break;
            
            case 6:
                soco += 4;
                window.alert("Você deu um soco, 4 pontos!");
                break;

            case 7:
                magia += 10;
                window.alert("Você usou uma, 10 pontos!");
                break;
        
            default:
                window.alert("Digite uma opção válida");
                break;
        }
    }
}

total_pontos = chute + soco + magia;

window.alert(`Total de pontos: ${total_pontos} 
chute: ${chute} 
soco: ${soco} 
magia: ${magia}`);
