const nums = [
    parseInt(window.prompt("Digite um numero")),
    parseInt(window.prompt("Digite um numero")),
    parseInt(window.prompt("Digite um numero")),
    parseInt(window.prompt("Digite um numero")),
    parseInt(window.prompt("Digite um numero"))
]
let maior = nums[0];
for(i = 1; i<nums.length; i++){
    if(nums[i]>maior){
        maior = nums[i];
    }
}

window.alert(`maior numero inserido foi ${maior}`);