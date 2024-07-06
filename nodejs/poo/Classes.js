// HERANÇA
class Pessoa {
    nome;
    cpf;

    constructor(nome, cpf) {
        this.nome = nome;
        this.cpf = cpf;
    }

    acesso() {
        console.log("Acesso pela porta de clientes");
    }
}

class Gerente extends Pessoa {

    constructor(nome, cpf, senha) {
        super(nome, cpf);
        this.senha = senha;
    }

    acesso() {
        console.log("Acesso pela porta de Gerentes");
    }
}

const pessoa1 = new Pessoa("Max", "121232131");
pessoa1.nome = "Max";

const pessoa2 = new Pessoa("Jose", "12312");
pessoa2.nome = "Jose";

const gerente1 = new Gerente("Alves", "12312321", "123123");
gerente1.nome = 'Alves';
gerente1.acesso();