/* // 1 - Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que 
serão operados. Faça programas para:
Adição (a + b)
Subtração (a - b)
Multiplicação (a * b)
Divisão (a / b)
Módulo (a % b) */

function math(a , b , operator){
    if(operator == '+' ){
        return a + b
    } else if(operator == '-'){
        return a - b
    } else if(operator == '*'){
        return a * b
    } else if(operator = '/'){
        return a / b
    } else{
        return a % b
    }
}
 math(5 , 7 , '+')
 



//2 - Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

function bigNumber(a , b){
    if(a > b){
        return a + "é maior que " + b
    }else{
        console.log(b + " é maior que " + a)
    }
}
bigNumber(5 , 8)

//3 - Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

function betterThreeNumbers(a , b , c){
    if(a > b && a > c){
        console.log(a + ' é o maior')
    } if(b > a && b > c ){
        console.log(b + ' é o maior')
    } else {
        console.log(c + " é o maior")
    }
}
betterThreeNumbers( 26 , 50 , 2)

//4 - Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
function test(x){
    if( x % 2 == 0){
        console.log(x + ' is positive')
    }else if (x % 2 !== 0){
        console.log(x + " is negative")
    } else{
        console.log(x + ' is zero')
    }
}

test (5)

//5 - Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um 
//triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

function triangle (lado1 , lado2 , lado3){
    if(lado1 <=0 || lado2 <= 0 || lado3 <=0){
        console.log('Erro')
    } else if (lado1 + lado2 + lado3 == 180){
console.log('True')
    } else{
        console.log('False')
    }
}
triangle (30 , 100 , 50)




 /*   let car = {
    type: 'Fiat',
    model: '500',
    color: 'white',
  };
  
  for (let index in car) {
    console.log(index , car[index]);
  }
 */

  let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge' 
  };
  for(let box in names){
    console.log("Olá" + ' ' + names[box])
  }

  let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };
  for(let key in car)
  console.log(key , car[key])




  let diasDaSemana = {
    1: 'domingo',
    2: 'segunda',
    3: 'terça',
    4: 'quarta',
    5: 'quinta',
    6: 'sexta',
    7: 'sábado',
    };
    
    // SyntaxError: Unexpected number
    console.log(diasDaSemana['5']); // domingo

    let player = {
    name : 'Marta',
    lastName : 'Silva',
    age : 34,
    medals:{ 
    golden: 2, 
    silver: 3,
},
    bestInTheWorld : [2006, 2007, 2008, 2009, 2010, 2018],
};

let bestTime = player.bestInTheWorld.length
    
console.log('A jogadora' + ' ' + player.name + ' '+ player.lastName + ' ' + 'foi eleita a melhor do mundo por ' + ' '+ bestTime + ' ' + 'vezes')