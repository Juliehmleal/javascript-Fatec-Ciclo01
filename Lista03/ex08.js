const preco_combustivel = parseFloat(window.prompt("Quanto está o preço do combustivel? "));
const km_por_litro = parseFloat(window.prompt("Quantos km por litro seu carro faz? "));
const distancia = parseFloat(window.prompt("Quantos km você deseja percorrer ?"));

const litrosDistancia = (distancia/km_por_litro);
const gasto = (litrosDistancia*preco_combustivel);

window.alert(`total de litros: ${litrosDistancia.toFixed(2)}`);
window.alert(`Preço: ${gasto.toFixed(2)}`);
