let nums = [
    parseFloat(window.prompt("digite o primeiro numero:")),
    parseFloat(window.prompt("digite o segundo numero:")),
    parseFloat(window.prompt("digite o terceiro numero:")),
    parseFloat(window.prompt("digite o quarto numero:"))
];

if(nums[2]**2 > 100){
    window.alert(nums[2]);
} else {
    window.alert(` ${nums}`);
}