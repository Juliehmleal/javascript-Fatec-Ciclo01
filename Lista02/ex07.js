let saldo = parseFloat(1000);
const senha = 123456;

let tentSenha = parseInt(window.prompt("Digite a senha"));

if(tentSenha === senha)
{
    let saque = parseFloat(window.prompt(`Acesso permitido, digite o quanto deseja sacar, saldo atual: ${saldo}`));
    if(saque <= saldo)
    {
        window.alert(`Saque realizado, novo saldo: ${(saldo-saque).toFixed(2)}`);
    } else {
        window.alert("Saldo insuficiente.");
    }
}else{
    window.alert("Acesso negado, senha errada");
}