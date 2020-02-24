const arr = [1, 3, 4, 5, 6];

const newArr = arr.map(function(item) {
  return item * 2;
});

//mesmo funcionamento
const newArr2 = arr.map(item => item * 2);
console.log(newArr2);

const teste = () => ({ nome: "Guilherme" });
console.log(teste);
