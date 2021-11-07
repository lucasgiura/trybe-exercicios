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

/* Exercício 6 */
const chessPiece = 'bispo'

switch (chessPiece.toLowerCase()) {
    case "rei":
        console.log('Rei -> Uma casa apenas, para qualquer direção')
        break;

    case "dama":
        console.log('Dama -> Quantas casa quiser e para qualquer direção')
        break; 
    
    case "torre":
        console.log('Torre -> Move-se em linha reta, tanto na vertical quanto na horizontal, quantas casas quiser')
        break;
    
    case "bispo":
        console.log('Bispo -> Move-se na diagonal, quantas casas quiser')
        break;     
    
    case "cavalo":
        console.log('Cavalo -> Move-sem em "L". Pode andar duas casas na horizontal e uma vertical ou ao contrário')
        break;                        
    
    case "peão":
        console.log('Move-se sempre uma casa para frente, exceto no primeiro movimento, quando pode mover-se duas casas')
        break;  

    default:
        console.log('Erro, peça inválida')
        break;
}

/* Exercício 7 */

const porcentagem = 70

if (porcentagem < 0 || porcentagem > 100) {
    console.log('Erro, valor inválido')
} else if (porcentagem >= 90){
    console.log('Nota A')
} else if (porcentagem >= 80){
    console.log('Nota B')
} else if (porcentagem >= 70){
    console.log('Nota C')
} else if (porcentagem >= 60){
    console.log('Nota D')
} else if (porcentagem >= 50){
    console.log('Nota E')
} else {
    console.log('Nota F')
}

/* Exercício 8 */

let aa = 2
let b = 3
let c = 8

let isEven = false

if (aa % 2 == 0 || b % 2 == 0 || c % 2 == 0 ) {
    isEven = true
};
console.log(isEven)

/* Exercício 9 */

let a2 = 4
let b2 = 2
let c2 = 10

let heIs = false

if (a2 % 2 == 1 || b2 % 2 == 1 || c2 % 2 == 1){
    heIs = true  
};
console.log(heIs);

/* Exercício 10 */

const custo = 50
const valor = 150

const valorCustoTotal = custo + (custo * (20/100))
const totalLucro = (valor - valorCustoTotal) * 1000

if (custo >= 0 && valor >= 0) {
    console.log(totalLucro)  
} else {
    console.log('Erro de valores')
}

/* Exercício 11 */

let aliquotaInss;
let aliquotaIr;

const salarioBruto = 2500;

if (salarioBruto <= 1556.94) {
     aliquotaInss = salarioBruto * 0.08;
} else if (salarioBruto <= 2594.92){
    aliquotaInss = salarioBruto * 0.09 ;
} else if (salarioBruto <= 5189.82){
    aliquotaInss = salarioBruto * 0.11;
} else {
    aliquotaInss = 570.88;
};

const salarioBase = salarioBruto - aliquotaInss;

if (salarioBase <= 1903.98) {
     aliquotaIr = 0;
} else if (salarioBase <= 2826.65 ){
     aliquotaIr = (salarioBase * 0.075) - 142.80;
} else if (salarioBase <= 3751.05){
     aliquotaIr = (salarioBase * 0.15) - 354.80;
} else if (salarioBase <= 4664.68){
    aliquotaIr = (salarioBase * 0.22) - 636.13;
} else {
     aliquotaIr = (salarioBase * 0.275) - 869.36;
};

console.log("Salário: " + (salarioBase - aliquotaIr))