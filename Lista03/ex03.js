const sexo = window.prompt("Digite m para masculino e f para feminino");

if(isNaN(sexo) && (sexo === "m" || sexo === "f")){
    
    const altura = parseFloat(window.prompt("Digite sua altura em metros: "));


    switch (sexo) {
        case "m":
            window.alert(`Seu peso ideal seria de: ${((altura**2)*23).toFixed(2)} Kg.`);
            break;
        
        case "f":
            window.alert(`Seu peso ideal seria de: ${((altura**2)*22).toFixed(2)} Kg.`);
            break;
        default:
            window.alert("inválido");
            break;
    }
}else {
    window.alert("Digite uma entrada de dados válida");
}
