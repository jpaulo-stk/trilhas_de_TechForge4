"use strict";
//ex1
class Veiculo {
    mover() {
        console.log("O veiculo ta no gas chefe");
    }
}
class Carro extends Veiculo {
    mover() {
        console.log("O carro ja ta na pixta meu parcero");
    }
}
class Bicicleta extends Veiculo {
    mover() {
        console.log("A bicicleta ta la ne...");
    }
}
const carro = new Carro();
const bicicleta = new Bicicleta();
carro.mover();
bicicleta.mover();
class Circulo {
    constructor(raio) {
        this.raio = raio;
    }
    calcularArea() {
        return Math.PI * Math.pow(this.raio, 2);
    }
}
class Quadrado {
    constructor(lado) {
        this.lado = lado;
    }
    calcularArea() {
        return this.lado * this.lado;
    }
}
class Triangulo {
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
    }
    calcularArea() {
        return (this.base * this.altura) / 2;
    }
}
function imprimirAreas(figuras) {
    figuras.forEach((figura) => {
        console.log(`Área: ${figura.calcularArea()}`);
    });
}
const figuras = [
    new Circulo(5),
    new Quadrado(4),
    new Triangulo(6, 3),
];
imprimirAreas(figuras);
//ex3
class Pagamento {
    processar() {
        throw new Error("Método processar() not implementing, toma o englsh");
    }
}
class PagamentoCartao extends Pagamento {
    constructor(numeroCartao) {
        super();
        this.numeroCartao = numeroCartao;
    }
    processar() {
        if (this.numeroCartao.length === 16) {
            console.log("pagamento com cartao foi top chefe.");
        }
        else {
            console.log("numero do cartão inválido, ta clonando fdp?.");
        }
    }
}
class PagamentoBoleto extends Pagamento {
    processar() {
        console.log("O CODIGUIN do boleto foi gerado ON SUCCESS.");
    }
}
function processarPagamentos(pagamentos) {
    pagamentos.forEach((pagamento) => pagamento.processar());
}
const pagamentoCartao = new PagamentoCartao("1234567812345678");
const pagamentoBoleto = new PagamentoBoleto();
processarPagamentos([pagamentoCartao, pagamentoBoleto]);
//ex4
class Animal {
    constructor(energiaInicial) {
        this.energia = energiaInicial;
    }
    comer(valor) {
        this.energia += valor;
    }
    gastarEnergia(valor) {
        if (valor > 0 && this.energia >= valor) {
            this.energia -= valor;
        }
        else {
            console.log("ta sem eneria krai ou o valor e invalido.");
        }
    }
    statusEnergia() {
        console.log(`ENERGIA DO ENERGETICO É: ${this.energia}`);
    }
}
class Leao extends Animal {
    constructor(energiaInicial) {
        super(energiaInicial);
    }
    comer() {
        this.gastarEnergia(10);
        super.comer(20);
    }
}
class Passaro extends Animal {
    constructor(energiaInicial) {
        super(energiaInicial);
    }
    comer() {
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
class Funcionario {
    constructor(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }
    getSalario() {
        return this.salario;
    }
    calcularSalarioComBonus() {
        return this.salario + this.calcularBonus();
    }
}
class Gerente extends Funcionario {
    calcularBonus() {
        return this.getSalario() * 0.1;
    }
}
class Operario extends Funcionario {
    calcularBonus() {
        return this.getSalario() * 0.05;
    }
}
function calcularSalariosComBonus(funcionarios) {
    funcionarios.forEach((funcionario) => {
        console.log(`oia o bônus: ${funcionario.calcularSalarioComBonus()}`);
    });
}
const gerente = new Gerente("THIAGO FEIO", 5000);
const operario = new Operario("JOAO LINDO", 2000);
calcularSalariosComBonus([gerente, operario]);
