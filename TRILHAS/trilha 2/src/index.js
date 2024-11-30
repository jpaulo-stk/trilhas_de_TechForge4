// ex 1
var ContaBancaria = /** @class */ (function () {
    function ContaBancaria(nome, saldo) {
        if (saldo === void 0) { saldo = 0; }
        this.nome = nome;
        this.saldo = saldo;
    }
    ContaBancaria.prototype.depositar = function (valor) {
        if (valor > 0) {
            this.saldo += valor;
        }
        else {
            console.log("O VALOR N TA CERTO CHEFE.");
        }
    };
    ContaBancaria.prototype.sacar = function (valor) {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -= valor;
        }
        else {
            console.log("SEM SALDO.");
        }
    };
    return ContaBancaria;
}());
var conta = new ContaBancaria("JOAZIN DA VIPTECH", 10000);
conta.depositar(1000);
conta.sacar(2000);
console.log(conta.saldo);
//ex 2
var Livro = /** @class */ (function () {
    function Livro(titulo, autor, paginas, lido) {
        if (lido === void 0) { lido = false; }
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
        this.lido = lido;
    }
    Livro.prototype.marcarComoLido = function () {
        this.lido = true;
    };
    return Livro;
}());
var livro = new Livro("O LOL", "RIOT GAMES", 2);
livro.marcarComoLido();
console.log(livro.lido);
//ex3
var Produto = /** @class */ (function () {
    function Produto(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }
    Produto.prototype.calcularValorTotal = function () {
        return this.preco * this.quantidade;
    };
    return Produto;
}());
var produto = new Produto("MOUSE LOGITECH GPRO X SUPERLIGHT LIGHTSPEED O MAIS RAPIDO DO MUNDO", 521, 1);
console.log(produto.calcularValorTotal());
//ex4
var Temperatura = /** @class */ (function () {
    function Temperatura(valor) {
        this.valor = valor;
    }
    Temperatura.prototype.paraFahrenheit = function () {
        return (this.valor * 9) / 5 + 32;
    };
    Temperatura.prototype.paraKelvin = function () {
        return this.valor + 273.15;
    };
    return Temperatura;
}());
var temp = new Temperatura(32);
console.log(temp.paraFahrenheit());
console.log(temp.paraKelvin());
//ex5
var Agenda = /** @class */ (function () {
    function Agenda() {
        this.compromissos = [];
    }
    Agenda.prototype.adicionarCompromisso = function (compromisso) {
        if (compromisso.trim().length > 0) {
            this.compromissos.push(compromisso);
        }
        else {
            console.log("o compromisso não pode ficar de fora negao.");
        }
    };
    Agenda.prototype.listarCompromissos = function () {
        if (this.compromissos.length > 0) {
            console.log("compromissos:");
            this.compromissos.forEach(function (c, index) {
                return console.log("".concat(index + 1, ": ").concat(c));
            });
        }
        else {
            console.log("nenhum compromisso encontrado.");
        }
    };
    return Agenda;
}());
var agenda = new Agenda();
agenda.adicionarCompromisso("VipTech às 8h da manha po");
agenda.adicionarCompromisso("Almoçar às 14:30h");
agenda.listarCompromissos();
console.log("A VIDA N TA FACIL PRA NINGUEM PROFESSORA, QUEM TA TRISTE NÃO TA MAIS, SO PROGESSO PARA TODOS OS PROGRAMDORES TRABALHADORES QUE UM DIA VAO SER OS MAIS FODAS DO MEU BRASIL SIUUUUUUUUUUUUU");
