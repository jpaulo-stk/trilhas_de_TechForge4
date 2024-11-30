// ex 1

class ContaBancaria {
  public nome: string;
  public saldo: number;

  constructor(nome: string, saldo: number = 0) {
    this.nome = nome;
    this.saldo = saldo;
  }

  depositar(valor: number): void {
    if (valor > 0) {
      this.saldo += valor;
    } else {
      console.log("O VALOR N TA CERTO CHEFE.");
    }
  }

  sacar(valor: number): void {
    if (valor > 0 && valor <= this.saldo) {
      this.saldo -= valor;
    } else {
      console.log("SEM SALDO.");
    }
  }
}

const conta = new ContaBancaria("JOAZIN DA VIPTECH", 10000);
conta.depositar(1000);
conta.sacar(2000);
console.log(conta.saldo);

//ex 2

class Livro {
  titulo: string;
  autor: string;
  paginas: number;
  lido: boolean;

  constructor(
    titulo: string,
    autor: string,
    paginas: number,
    lido: boolean = false
  ) {
    this.titulo = titulo;
    this.autor = autor;
    this.paginas = paginas;
    this.lido = lido;
  }

  marcarComoLido(): void {
    this.lido = true;
  }
}

const livro = new Livro("O LOL", "RIOT GAMES", 2);
livro.marcarComoLido();
console.log(livro.lido);

//ex3

class Produto {
  nome: string;
  preco: number;
  quantidade: number;

  constructor(nome: string, preco: number, quantidade: number) {
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
  }

  calcularValorTotal(): number {
    return this.preco * this.quantidade;
  }
}

const produto = new Produto(
  "MOUSE LOGITECH GPRO X SUPERLIGHT LIGHTSPEED O MAIS RAPIDO DO MUNDO",
  521,
  1
);
console.log(produto.calcularValorTotal());

//ex4

class Temperatura {
  valor: number;

  constructor(valor: number) {
    this.valor = valor;
  }

  paraFahrenheit(): number {
    return (this.valor * 9) / 5 + 32;
  }

  paraKelvin(): number {
    return this.valor + 273.15;
  }
}

const temp = new Temperatura(32);
console.log(temp.paraFahrenheit());
console.log(temp.paraKelvin());

//ex5

class Agenda {
  compromissos: string[];

  constructor() {
    this.compromissos = [];
  }

  adicionarCompromisso(compromisso: string): void {
    if (compromisso.trim().length > 0) {
      this.compromissos.push(compromisso);
    } else {
      console.log("o compromisso não pode ficar de fora negao.");
    }
  }

  listarCompromissos(): void {
    if (this.compromissos.length > 0) {
      console.log("compromissos:");
      this.compromissos.forEach((c, index) =>
        console.log(`${index + 1}: ${c}`)
      );
    } else {
      console.log("nenhum compromisso encontrado.");
    }
  }
}

const agenda = new Agenda();
agenda.adicionarCompromisso("VipTech às 8h da manha po");
agenda.adicionarCompromisso("Almoçar às 14:30h");
agenda.listarCompromissos();

console.log(
  "A VIDA N TA FACIL PRA NINGUEM PROFESSORA, QUEM TA TRISTE NÃO TA MAIS, SO PROGESSO PARA TODOS OS PROGRAMDORES TRABALHADORES QUE UM DIA VAO SER OS MAIS FODAS DO MEU BRASIL SIUUUUUUUUUUUUU"
);
