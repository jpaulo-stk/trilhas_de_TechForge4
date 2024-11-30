"use strict";
// ex 1
class ItemLoja {
  constructor(id, name, preco) {
    this.id = id;
    this.name = name;
    this.preco = preco;
  }
  values() {
    console.log(this.id + " " + this.name + " " + this.preco);
  }
}
const Loja = new ItemLoja(1, "Bola", 80);
Loja.values();
class Texto {
  constructor(titulo, conteudo) {
    this.titulo = titulo;
    this.conteudo = conteudo;
  }
  exibir() {
    console.log(`Titulo: ${this.titulo}, Conteudo: ${this.conteudo} `);
  }
}
const exbindo = new Texto(
  "Documento X",
  "Notas dos trabalhos da prof claudia garai"
);
exbindo.exibir();
class Walmart {
  constructor() {
    this.produtos = [];
  }
  addProduto(produtos) {
    this.produtos.push(produtos);
  }
  searchProduto(codigo) {
    return this.produtos.find((produtos) => produtos.codigo === codigo);
  }
}
const loja = new Walmart();
loja.addProduto({ codigo: 1, nome: "PS6" });
loja.addProduto({ codigo: 2, nome: "PS7" });
loja.addProduto({ codigo: 3, nome: "PS8" });
const produto1 = loja.searchProduto(1);
console.log(produto1 ? `Produto: ${produto1.nome}` : " Hoje não chefe");
const produto2 = loja.searchProduto(2);
console.log(produto2 ? `Produto: ${produto2.nome}` : " Hoje não chefe");
class Biblioteca {
  constructor() {
    this.livros = [];
  }
  addLivro(livros) {
    this.livros.push(livros);
  }
  buscarLivroPorCodigo() {
    return this.livros.filter((livros) => livros.disponivel);
  }
}
const livro = new Biblioteca();
livro.addLivro({ titulo: "Harry Potter", autor: "nao sei", disponivel: true });
livro.addLivro({
  titulo: "Harry Potter 2",
  autor: "nao sei",
  disponivel: true,
});
livro.addLivro({
  titulo: "Harry Potter 3",
  autor: "nao sei",
  disponivel: false,
});
const livrosDisponiveis = livro.buscarLivroPorCodigo();
livrosDisponiveis.forEach((livro) => {
  console.log(`livro: ${livro.titulo} (${livro.autor})`);
});
class BibliotecaGestao {
  constructor() {
    this.livros = [];
  }
  adicionarLivro(livro) {
    this.livros.push(livro);
  }
  filtrarPorGenero(genero) {
    return this.livros.filter(
      (livro) => livro.genero.toLowerCase() === genero.toLowerCase()
    );
  }
  buscarPorAutor(autor) {
    return this.livros.filter((livro) =>
      livro.autor.toLowerCase().includes(autor.toLowerCase())
    );
  }
  obterLivrosDisponiveisOrdenados() {
    return this.livros
      .filter((livro) => livro.disponivel)
      .sort((a, b) => a.titulo.localeCompare(b.titulo));
  }
}
const biblioteca = new BibliotecaGestao();
biblioteca.adicionarLivro({
  titulo: "Lol 2",
  autor: "RIOTO GOMES",
  genero: "BOSTA",
  disponivel: true,
});
biblioteca.adicionarLivro({
  titulo: "AS TRANCAS DE UM CARECA",
  autor: "EU MESMO",
  genero: "O MELHOR DO MUNDO",
  disponivel: false,
});
biblioteca.adicionarLivro({
  titulo: "O GRANDE HOMEM",
  autor: "murilo zermiani",
  genero: "BAIXO",
  disponivel: true,
});
biblioteca.adicionarLivro({
  titulo: "lol 1  ",
  autor: "RIOTO GOMES",
  genero: "BOSTA",
  disponivel: true,
});
console.log("Livros de gênero 'BOSTA':");
console.log(biblioteca.filtrarPorGenero("BOSTA"));
console.log("Livros do autor 'murilo zermiani':");
console.log(biblioteca.buscarPorAutor("murilo zermiani"));
console.log("Livros disponíveis ordenados:");
console.log(biblioteca.obterLivrosDisponiveisOrdenados());
