let letra = window.prompt("Digite uma letra");
let vogais = ["a", "e", "i", "o", "u"];
let comparacao = false;

for (let i = 0; i < vogais.length; i++) {
    if(letra.toLowerCase() === vogais[i])
    {
        comparacao = true;
    }
}

if(comparacao){
    window.alert("Você digitou uma vogal");
}else {
    window.alert("Você digitou uma consoante")
}
