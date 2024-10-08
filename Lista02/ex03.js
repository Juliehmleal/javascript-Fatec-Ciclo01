const latao = parseFloat(window.prompt("Insira a quantidade de latão que deseja obter (em KG): "));


//proporção 7 de cobre para 3 de zinco
const quantidadeZinco = (qtLatao) => {
    return qtLatao*3
}

const quantidadeCobre = (qtLatao) => {
    return qtLatao*7
}


window.alert(`Para obter ${latao} kg de latão, será necessário, ${quantidadeZinco(latao.toFixed(2))} de zinco e ${quantidadeCobre(latao.toFixed(2))} de cobre`);