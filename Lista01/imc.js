function imc (peso, altura)
{
    res = peso/(altura**2);
    return res;
}


let pesoPessoa = parseFloat(window.prompt("Digite o seu peso: "));
let alturaPessoa = parseFloat(window.prompt("Digite sua altura: "));


let Pessoa = imc(pesoPessoa, alturaPessoa)
window.alert("Imc tem como resultado: " + Pessoa.toFixed(2));



