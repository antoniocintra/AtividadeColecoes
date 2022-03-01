const meuArray = [ 30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(arr) {
 const mySet = new Set(arr);

 return [...mySet]; // Com o Spread ... criamos um array vazio e para cada elemento  do Set adicionamos dentro deste array, formando assim um novo array. os elementos do set se tornam os elementos do array graças ao spread ... 
}

console.log(valoresUnicos(meuArray));