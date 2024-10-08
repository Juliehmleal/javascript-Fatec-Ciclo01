let anos = window.prompt("Anos: ");
let meses = window.prompt("Meses: ");
let dias = window.prompt("Dias: ");

let idadeDias = (anos*365) + (meses*30) + (dias);

window.alert(`Sua idade em dias é ${idadeDias}`);