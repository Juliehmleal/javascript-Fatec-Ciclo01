const v_inicial = parseFloat(window.prompt("Digite a velocidade inicial(m/s): "));
const aceleracao = parseFloat(window.prompt("Digite a aceleração (m/s²): "));
const tempo = parseFloat(window.prompt("Digite o intevalo de tempo (s): "));

window.alert(`A velocidade do objeto é de ${(v_inicial+(aceleracao*tempo)).toFixed(2)} m/s`);