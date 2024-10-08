const valor_produto = parseFloat(window.prompt("digite o valor do produto"));
if(valor_produto < 20 && valor_produto > 0){
    window.alert(`Valor do produto com lucro: ${valor_produto*1.45}`)
}else {
    window.alert(`Valor do produto com lucro: ${valor_produto*1.30}`)
}