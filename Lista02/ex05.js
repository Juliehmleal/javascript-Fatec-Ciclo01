const idade = parseInt(window.prompt("Digite a sua idade: "));

if(idade == 0 || idade <=4 )
{
    window.alert("Não pode competir");
}else if(idade >= 5 && idade <= 7){
    window.alert("Infantil A");
}else if(idade >= 8 && idade <= 11){
    window.alert("Infantil B");
}else if(idade >= 12 && idade <= 13){
    window.alert("Juvenil A");
}else if(idade >= 14 && idade <= 17){
    window.alert("Juvenil B");
}else{
    window.alert("Adulto");
}