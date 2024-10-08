const salario_minimo = 1412.00;
const salario_pessoa = parseFloat(window.prompt("Digite o seu salario"));
const quantidade_salarios = salario_pessoa/salario_minimo;
window.alert(`Quantidade de salarios minimos: ${quantidade_salarios.toFixed(2)}`);