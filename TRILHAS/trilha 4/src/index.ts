// ex 1

console.log(
  "EX 1 --------------------------------------------------------------------------------------------"
);
interface Produto {
  id: number;
  name: string;
  preco: number;
}

class ItemLoja implements Produto {
  id: number;
  name: string;
  preco: number;

  constructor(id: number, name: string, preco: number) {
    this.id = id;
    this.name = name;
    this.preco = preco;
  }

  values(): void {
    console.log(this.id + " " + this.name + " " + this.preco);
  }
}

const Loja = new ItemLoja(1, "Bola", 80);

Loja.values();

//ex 2

console.log(
  "EX 2 --------------------------------------------------------------------------------------------"
);

interface documento {
  titulo: string;
  conteudo: string;
}

class Texto implements documento {
  titulo: string;
  conteudo: string;

  constructor(titulo: string, conteudo: string) {
    this.titulo = titulo;
    this.conteudo = conteudo;
  }

  exibir(): void {
    console.log(`Titulo: ${this.titulo}, Conteudo: ${this.conteudo} `);
  }
}

const exbindo = new Texto(
  "Documento X",
  "Notas dos trabalhos da prof claudia garai"
);

exbindo.exibir();

// ex3

console.log(
  "EX 3 --------------------------------------------------------------------------------------------"
);

interface ProdutoLoja {
  codigo: number;
  nome: string;
}

class Walmart {
  private produtos: ProdutoLoja[] = [];

  addProduto(produtos: ProdutoLoja): void {
    this.produtos.push(produtos);
  }

  searchProduto(codigo: number): ProdutoLoja | undefined {
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

//ex 4

console.log(
  "EX 4 --------------------------------------------------------------------------------------------"
);

interface Livro {
  titulo: string;
  autor: string;
  disponivel: boolean;
}

class Biblioteca {
  private livros: Livro[] = [];

  addLivro(livros: Livro) {
    this.livros.push(livros);
  }

  buscarLivroPorCodigo(): Livro[] {
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

// ex 5

console.log(
  "EX 5 --------------------------------------------------------------------------------------------"
);

interface LivroBiblioteca {
  titulo: string;
  autor: string;
  genero: string;
  disponivel: boolean;
}

class BibliotecaGestao {
  private livros: LivroBiblioteca[] = [];

  adicionarLivro(livro: LivroBiblioteca): void {
    this.livros.push(livro);
  }

  filtrarPorGenero(genero: string): LivroBiblioteca[] {
    return this.livros.filter(
      (livro) => livro.genero.toLowerCase() === genero.toLowerCase()
    );
  }

  buscarPorAutor(autor: string): LivroBiblioteca[] {
    return this.livros.filter((livro) =>
      livro.autor.toLowerCase().includes(autor.toLowerCase())
    );
  }

  obterLivrosDisponiveisOrdenados(): LivroBiblioteca[] {
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
