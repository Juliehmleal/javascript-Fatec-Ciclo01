const nota1 = parseFloat(window.prompt("Nota da prova 1:"));
const nota2 = parseFloat(window.prompt("Nota da prova 2:"));
const nota3 = parseFloat(window.prompt("Nota da prova 3:"));

const faltas = parseInt(window.prompt("Quantas vezes você faltou? "));

let media = (nota1+nota2+nota3)/3;

if(faltas < (80 * 0.25)){
    if(media>7){
        window.alert(`Aprovado com media ${media.toFixed(2)}`);
    }else {
        window.alert(`Reprovado por nota com media de ${media.toFixed(2)}`);
    }

}else {
    window.alert("Reprovado por falta");
}


