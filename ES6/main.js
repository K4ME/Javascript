const usuario = {
  nome: "Guilherme",
  idade: 24,
  endereco: {
    cidade: "Ribeirão Preto",
    estado: "SP"
  }
};

const {
  nome,
  idade,
  endereco: { cidade }
} = usuario;
console.log(nome);
console.log(idade);
console.log(cidade);

function mostraNome({ nome, idade }) {
  console.log(nome, idade);
}

mostraNome(usuario);
