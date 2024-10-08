const totalPeso = parseFloat(window.prompt("Qual foi o peso total dos peixes (Kg):"));

const verificaPeso = (peso) => {
    return peso - 50;
}

const multa = (peso) =>
{
    return (peso-50)*4
}

if(totalPeso > 50)
{
    window.alert(`Peso excedente: ${verificaPeso(totalPeso)} e multa de: ${multa(totalPeso)}`);
}else{
    window.alert(`Sem multa`);
}




