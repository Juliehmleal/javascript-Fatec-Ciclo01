const voto = parseInt(window.prompt("Digite o seu voto"));

if(isNaN(voto)){
    window.alert("Insira um numero válido");
}else {
    if(voto>0 && voto<7){
        if(voto>=1 && voto <5){
            window.alert("Voto contabilizado com sucesso...");
        }else if(voto ==5 ){
            window.alert("Voto nulo contabilizado...");
        }else {
            window.alert("Voto branco contabilizado...");
        }
    }else {
        window.alert("Insira um numero válido"); 
    }
    
}