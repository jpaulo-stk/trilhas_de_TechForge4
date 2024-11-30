//ex1

class Veiculo {
  mover(): void {
    console.log("O veiculo ta no gas chefe");
  }
}

class Carro extends Veiculo {
  mover(): void {
    console.log("O carro ja ta na pixta meu parcero");
  }
}

class Bicicleta extends Veiculo {
  mover(): void {
    console.log("A bicicleta ta la ne...");
  }
}

const carro = new Carro();
const bicicleta = new Bicicleta();

carro.mover();
bicicleta.mover();

//ex2

interface FiguraGeometrica {
  calcularArea(): number;
}

class Circulo implements FiguraGeometrica {
  constructor(private raio: number) {}

  calcularArea(): number {
    return Math.PI * Math.pow(this.raio, 2);
  }
}

class Quadrado implements FiguraGeometrica {
  constructor(private lado: number) {}

  calcularArea(): number {
    return this.lado * this.lado;
  }
}

class Triangulo implements FiguraGeometrica {
  constructor(private base: number, private altura: number) {}

  calcularArea(): number {
    return (this.base * this.altura) / 2;
  }
}

function imprimirAreas(figuras: FiguraGeometrica[]): void {
  figuras.forEach((figura) => {
    console.log(`Área: ${figura.calcularArea()}`);
  });
}

const figuras: FiguraGeometrica[] = [
  new Circulo(5),
  new Quadrado(4),
  new Triangulo(6, 3),
];

imprimirAreas(figuras);

//ex3
class Pagamento {
  processar(): void {
    throw new Error("Método processar() not implementing, toma o englsh");
  }
}

class PagamentoCartao extends Pagamento {
  numeroCartao: string;

  constructor(numeroCartao: string) {
    super();
    this.numeroCartao = numeroCartao;
  }

  processar(): void {
    if (this.numeroCartao.length === 16) {
      console.log("pagamento com cartao foi top chefe.");
    } else {
      console.log("numero do cartão inválido, ta clonando fdp?.");
    }
  }
}

class PagamentoBoleto extends Pagamento {
  processar(): void {
    console.log("O CODIGUIN do boleto foi gerado ON SUCCESS.");
  }
}

function processarPagamentos(pagamentos: Pagamento[]): void {
  pagamentos.forEach((pagamento) => pagamento.processar());
}

const pagamentoCartao = new PagamentoCartao("1234567812345678");
const pagamentoBoleto = new PagamentoBoleto();

processarPagamentos([pagamentoCartao, pagamentoBoleto]);

//ex4

class Animal {
  private energia: number;

  constructor(energiaInicial: number) {
    this.energia = energiaInicial;
  }

  comer(valor: number): void {
    this.energia += valor;
  }

  gastarEnergia(valor: number): void {
    if (valor > 0 && this.energia >= valor) {
      this.energia -= valor;
    } else {
      console.log("ta sem eneria krai ou o valor e invalido.");
    }
  }

  statusEnergia(): void {
    console.log(`ENERGIA DO ENERGETICO É: ${this.energia}`);
  }
}

class Leao extends Animal {
  constructor(energiaInicial: number) {
    super(energiaInicial);
  }

  comer(): void {
    this.gastarEnergia(10);
    super.comer(20);
  }
}

class Passaro extends Animal {
  constructor(energiaInicial: number) {
    super(energiaInicial);
  }

  comer(): void {
    super.comer(10);
  }
}

const leao = new Leao(50);
const passaro = new Passaro(30);

leao.comer();
leao.statusEnergia();

leao.gastarEnergia(10);
leao.statusEnergia();

passaro.comer();
passaro.statusEnergia();

//ex 5
abstract class Funcionario {
  private nome: string;
  private salario: number;

  constructor(nome: string, salario: number) {
    this.nome = nome;
    this.salario = salario;
  }

  getSalario(): number {
    return this.salario;
  }

  abstract calcularBonus(): number;

  calcularSalarioComBonus(): number {
    return this.salario + this.calcularBonus();
  }
}

class Gerente extends Funcionario {
  calcularBonus(): number {
    return this.getSalario() * 0.1;
  }
}

class Operario extends Funcionario {
  calcularBonus(): number {
    return this.getSalario() * 0.05;
  }
}

function calcularSalariosComBonus(funcionarios: Funcionario[]): void {
  funcionarios.forEach((funcionario) => {
    console.log(`oia o bônus: ${funcionario.calcularSalarioComBonus()}`);
  });
}

const gerente = new Gerente("JOAO LINDO", 5000);
const operario = new Operario("THIAGO FEIO", 2000);

calcularSalariosComBonus([gerente, operario]);
