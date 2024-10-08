const raio = parseFloat(window.prompt("Digite o raio da circunferência (cm): "));
const area = (raio) => {
    let calculoArea=((raio**2)*3.14);
    return calculoArea;
}
window.alert(`A area do circulo com raio de ${raio} cm é de ${area(raio).toFixed(2)}picm²`);



