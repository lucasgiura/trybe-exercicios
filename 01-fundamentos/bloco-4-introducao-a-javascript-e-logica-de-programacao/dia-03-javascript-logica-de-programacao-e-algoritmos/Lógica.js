function findIndexOf(array, elemento) {
    // Desenvolva seu código nessa função
    let posicao;
    let posicaoFinal;
    for (let i = 0; i < array.length; i += 1) {
        posicao = array[i];
    if (elemento === posicao) {
        posicaoFinal = i;
      } else {
          posicaoFinal = "Elemento Não encontrado no array.";
      }
    return posicaoFinal;
  }
}
  
  console.log(findIndexOf(['baeta', 'tonn', 'byanca'], 'baeta'));