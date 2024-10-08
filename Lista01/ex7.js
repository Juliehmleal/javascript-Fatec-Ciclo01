var valorPremio = Number(window.prompt("Digite o valor do premio"));
var P1 = Number(window.prompt("Valor da pessoa 1:"));
var P2 = Number(window.prompt("Valor da pessoa 2:"));
var P3 = Number(window.prompt("Valor da pessoa 3:"));


var total = P1+P2+P3;

function proporcao (valorPremio, pessoa, total)
{
    return (pessoa/total)*valorPremio;
}

var premioP1 = proporcao(valorPremio, P1, total);
var premioP2 = proporcao(valorPremio, P2, total);
var premioP3 = proporcao(valorPremio, P3, total);


window.alert(`pessoa 1: ${premioP1.toFixed(2)} pessoa 2: ${premioP2.toFixed(2)} pessoa 3: ${premioP3.toFixed(2)}`);
