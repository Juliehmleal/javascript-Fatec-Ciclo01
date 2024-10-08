const opcao = parseInt(window.prompt("Qual combustível você deseja abastecer, 1- Gasolina, 2- Álcool"));


if(isNaN(opcao))
{
    window.alert("Erro, digite uma opção válida");
}else{
    switch (opcao) {
        case 1:
            let preco_gasolina
            let quantidade_gasolina = parseFloat(window.prompt("Quantidade de gasolina"));
            if(quantidade_gasolina >= 20){
                preco_gasolina = (quantidade_gasolina*4.10);
                preco_gasolina = preco_gasolina - (preco_gasolina*0.03);
                window.alert(`Preço final: ${preco_gasolina.toFixed(2)}`);
            }else 
            {
                preco_gasolina = (quantidade_gasolina*4.10);
                preco_gasolina = preco_gasolina - (preco_gasolina*0.06);
                window.alert(`Preço final: ${preco_gasolina.toFixed(2)}`);
            }
            break;
    
        case 2:
            let preco_alcool;
            let quantidade_alcool = parseFloat(window.prompt("Quantidade de álcool"));
            if(quantidade_alcool >= 20){
                preco_alcool = (quantidade_alcool*2.70);
                preco_alcool = preco_alcool - (preco_alcool*0.02)
                window.alert(`Preço final: ${preco_alcool.toFixed(2)}`);
    
            }else 
            {
                preco_alcool = (quantidade_alcool*2.70);
                preco_alcool = preco_alcool - (preco_alcool*0.02);
                window.alert(`Preço final: ${preco_alcool.toFixed(2)}`);
            }
            break;
    
        default:
            window.alert("Opção inválida");
            break;
    }
}
