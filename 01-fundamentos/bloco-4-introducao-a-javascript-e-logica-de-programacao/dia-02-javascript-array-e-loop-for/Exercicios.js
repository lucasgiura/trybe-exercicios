 
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Exercicio - 1 = Percorra o array imprimindo todos os valores nele contidos com a função console.log()
for (i = 0; i < numbers.length; i += 1){
    console.log(numbers[i])
}


//Exercicio - 2 = Some todos os valores contidos no array e imprima o resultado
let somaResultado = 0;
for (i = 0; i < numbers.length; i += 1){
somaResultado += numbers[i]
}
console.log(somaResultado)


//Exercicio - 3 = Calcule e imprima a média aritmética dos valores contidos no array
let somaResu = 0
for (i = 0; i < numbers.length ;i += 1){
    somaResu += numbers[i]
    mediaArit = (somaResu/numbers.length) 
}
console.log(mediaArit)


//Exercicio - 4 = Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20"
let somaResu1 = 0
for (i = 0; i < numbers.length ;i += 1){
    somaResu += numbers[i]
    mediaArit = (somaResu/numbers.length) 
}
if(mediaArit > 20){
console.log('valor maior que 20')
} else {
    console.log('valor menor que 20')
}


//Exercicio - 5 = Utilizando for , descubra qual o maior valor contido no array e imprima-o
highValue = numbers[0]
for(i = 1 ; i < numbers.length ; i += 1){
   if (numbers[i] > highValue){
        highValue = numbers[i]
   }
}
console.log(highValue)


//Exercicio - 6 = Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado"
quantidadeDeNumerosImpares = 0

for(i = 0 ; i < numbers.length ; i += 1){
    if (numbers[i] % 2 !== 0) {
        quantidadeDeNumerosImpares += 1
    }
}
    if (quantidadeDeNumerosImpares > 0){
        console.log(quantidadeDeNumerosImpares)
    } else {
        console.log('Nenhum numero ímpar')
    }


//Exercicio - 7 = Utilizando for , descubra qual o menor valor contido no array e imprima-o
lowValue = numbers[0]
for(i = 1 ; i < numbers.length ; i += 1){
   if (numbers[i] < lowValue){
        lowValue = numbers[i]
   }
}
console.log(lowValue)


//Exercicio - 8 = Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado

let numb = []
for (let i = 1; i <= 25; i += 1) {
    numb.push(i)
}
console.log(numb)


//Exercicio - 9 = Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 
let numb = []
for (let i = 1; i <= 25; i += 1) {
    numb.push(i / 2)
}
console.log(numb)
