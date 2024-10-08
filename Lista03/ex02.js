const num = parseInt(window.prompt("Digite um numero"));

if(isNaN(num)){
    window.alert(`Digite um numero válido`);
}else if((num%5 === 0) && ( num %3 === 0)){
    window.alert(`${num} é divisivel por 3 e por 5`);
}else{
    window.alert(`${num} NÃO é divisivel por 3 e por 5`);
}