const idade = parseInt(window.prompt("Digite a sua idade"));

if(isNaN(idade) || idade<0){
    window.alert("Digite uma idade válida")
}else {
    if(idade>=0 && idade<18){
        window.alert(`Faltam ${18-idade} anos para sua maioridade`);
    }else if(idade>=18){ 
        window.alert(`Você é maior de idade à ${idade-18} anos`);    
    }else{
        window.alert("idade inválida")
    }
}