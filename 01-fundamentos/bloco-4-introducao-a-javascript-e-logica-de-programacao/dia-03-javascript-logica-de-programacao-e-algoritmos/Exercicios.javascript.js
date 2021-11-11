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
let colunaTriangulo = n

for	(let i = 0 ; i < n ; i += 1){  
for (let indexColune = 0; indexColune <= n; indexColune += 1) {
    if(indexColune < colunaTriangulo){
			linhaTrianguloRetanguloInverso = linhaTrianguloRetanguloInverso + ' ' 
		} else {
			linhaTrianguloRetanguloInverso = linhaTrianguloRetanguloInverso + symbol
		}
  }
	console.log(linhaTrianguloRetanguloInverso);
	colunaTriangulo -= 1;
	linhaTrianguloRetanguloInverso = '';
	}

	// 4 - Faça uma piramide 
/* 	 *
		***
 	 *****
 */

	let linhaPiramide = ''
	let midOfMatrix = (n + 1) / 2 //Para achar o meio, sempre soma a base por +1 e divide por 2
	let controlLeft = midOfMatrix
	let controlRight = midOfMatrix

	for(indexTri = 0 ; indexTri <= midOfMatrix ; indexTri+= 1){
		for(coluneInde = 0 ; coluneInde <= n; coluneInde+= 1){
		if(coluneInde > controlLeft && coluneInde < controlRight){
			linhaPiramide = linhaPiramide + symbol
		} else{
			linhaPiramide = linhaPiramide + ' '
		}
	}
		console.log(linhaPiramide)
		controlLeft -= 1
		controlRight += 1
		linhaPiramide = ''
	}








