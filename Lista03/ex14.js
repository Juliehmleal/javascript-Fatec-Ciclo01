const valor = parseFloat(window.prompt("Digite o valor do pagamento"));
const juros = parseFloat(window.prompt("Digite o valor do juros"));
const dias = parseFloat(window.prompt("Digite o total de dias de atraso"));
if(valor > 0 && valor <= 100){
    window.alert("pagamento será realizado a vista");
}else if(valor > 100 && valor < 300){
    window.alert(`pagamento será realizado em 2x com juros ${juros} e ${dias} de atraso totalizando o valor de ${valor+((juros/100)*dias )}`);
}else if(valor > 300 && valor < 500){
    window.alert(`pagamento será realizado em 3x com juros ${juros} e ${dias} de atraso  totalizando o valor de ${valor+((juros/100)*dias )}`);
}else if(valor > 500 && valor < 900){
    window.alert(`pagamento será realizado em 5x com juros ${juros} e ${dias} de atraso totalizando o valor de ${valor+((juros/100)*dias )}`);
}else if(valor> 900 && valor < 1000){
    window.alert(`pagamento será realizado em 6x com juros ${juros} e ${dias} de atraso totalizando o valor de ${valor+((juros/100)*dias )}`);
}else{
   let parcelas = window.prompt("Em quantas parcelas você deseja pagar?");
   if(parcelas>1){
    window.alert(`pagamento será realizado em ${parcelas}x com juros ${juros} e ${dias} de atraso totalizando o valor de ${valor+((juros/100)*dias )}`);
   } else {
    window.alert("pagamento será realizado a vista");
   }
}
