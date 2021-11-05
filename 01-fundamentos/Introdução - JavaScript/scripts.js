/* Exercicio - 1 */
const num1 = 5
const num2 = 10

 console.log(num1 + num2)
 console.log(num1 - num2)
 console.log(num1 * num2)
 console.log(num1 / num2)
 console.log(num1 % num2)

/* Exercicio - 2 */
if ( num1 > num2) {
    console.log('O num1 é maior que num2')
} else{
    console.log('O num2 é maior que o num1')
}

/* Exercicio - 3 */
const num3 = 2
if (num1 > num2 && num1 > num3) {
    console.log('Num1 é o maior ')
} else if(num2 > num1 && num2 > num3){
    console.log('Num2 é o maior')
} else {
    console.log('Num3 é o maior')
}

/* Exercicio - 4 */

const number = 10

if (number > 0) {
    console.log('positive')
} else if(number < 0){
    console.log('negative')
} else {
    console.log('zero')
}

/* Exercicio - 5 */

const a = 20
const b = 50
const c = 90

const somaDosAngulos = a + b + c
const angulosPositivos = a > 0 && b > 0 && c > 0

if(angulosPositivos) {
if (somaDosAngulos) {
    console.log('True');  
} else {
    console.log('False');
};
} else {
    console.log('Erro: ângulo inválido');
}