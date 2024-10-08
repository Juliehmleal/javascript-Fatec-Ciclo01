let P1 = parseFloat(window.prompt("Digite a nota da prova 1: "));
let P2 = parseFloat(window.prompt("Digite a nota da prova 2: "));

let T1 = parseFloat(window.prompt("Digite a nota do trabalho 1: "));
let T2 = parseFloat(window.prompt("Digite a nota do trabalho 2: "));

const media = (P1*0.7 + T2*0.3 + P2*0.7 + T2*0.3)/2;

media>=6 ? window.alert(`Média: ${media.toFixed(2)} aprovado(a)`): window.alert(`Média ${media.toFixed(2)} reprovado(a)`);
