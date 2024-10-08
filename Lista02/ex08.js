let n =[
parseInt(window.prompt("Digite o 1 numero: ")),
parseInt(window.prompt("Digite o 2 numero: ")),
parseInt(window.prompt("Digite o 3 numero: ")),
]

let i;
for (i=1; i<n.length; i++){
    if(n[i]<=n[i-1])
    {
        let aux = n[i];
        n[i] = n[i-1];
        n[i-1] = aux;
    }
}

let aux;
if(n[0]>n[1]){
    aux = n[0]
    n[0] = n[1];
    n[1] = aux;
}


window.alert(`${n[0]}, ${n[1]}, ${n[2]}`);







