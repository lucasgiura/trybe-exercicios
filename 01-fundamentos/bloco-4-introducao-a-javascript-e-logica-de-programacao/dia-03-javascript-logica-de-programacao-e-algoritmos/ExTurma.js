//2. Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.

let number ;
let numberImpar;

for(i = 2 ; i <= 150 ; i += 1){
    number = i
}
if(number % 2 !== 0){
    numberImpar += 1
}
if(numberImpar = 50){
    console.log('50 numeros impares')
}

