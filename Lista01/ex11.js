let num1 = parseInt(window.prompt("Digite um numero: "));
let num2 = parseInt(window.prompt("Digite um outro: "));

if(num1 === num2)
{
    window.alert(`Numeros ${num1} e ${num2} são iguais.`);
}else if(num1>num2)
{
    window.alert(`Numero ${num1} é maior que ${num2}.`);
}else if(num2>num1){
    window.alert(`Numero ${num2} é maior que ${num1}`);
} else{
    window.alert("Valores inválidos");
}