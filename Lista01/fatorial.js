function fatorial1 (n)
{
    //recursividade comum usando uma variavel de controle
    var fat;
    var n;

    if(n<=1)
    {
        fat = 1;
    }else {
        fat = fatorial1(n-1) * n
    }

    return fat;
}


console.log(fatorial1(5))
