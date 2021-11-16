/* 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , 
imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:*/

let n = 5;
let symbol = '*';
let linhaDoQuadrado = '';

for(let i = 0 ; i < n; i += 1){
    linhaDoQuadrado = linhaDoQuadrado + symbol;
};
for(let i = 0 ; i < n; i += 1){
    console.log(linhaDoQuadrado);
};

/* 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. */
let linhaTrianguloRetangulo = ''

for (i = 0 ; i < n ; i += 1){
    linhaTrianguloRetangulo = linhaTrianguloRetangulo + symbol 
    console.log(linhaTrianguloRetangulo)
}  

/* 3- Agora inverta o lado do triângulo. */

let linhaTrianguloRetanguloInverso = ''
let space = ' '
let spaceTriangulo = ''
let y = 0
for(i = 5 ; i > y ; i -= 1){
    spaceTriangulo =  space + spaceTriangulo
}
for (let i = 0; i < n; i += 1) {
    linhaTrianguloRetanguloInverso = linhaTrianguloRetanguloInverso + symbol
    console.log(spaceTriangulo + linhaTrianguloRetanguloInverso )

};








