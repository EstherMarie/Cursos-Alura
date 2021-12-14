import { Cliente } from "./Cliente.js";

export class ContaCorrente {
  static numeroDeContas = 0;
  _saldo = 0;

  constructor(agencia, { nome, cpf }) {
    this._agencia = agencia;
    this._cliente = {
      nome: nome,
      cpf: cpf,
    };
    ContaCorrente.numeroDeContas += 1;
  }

  get cliente() {
    return this._cliente;
  }

  get saldo() {
    return this._saldo;
  }

  set cliente(novoValor) {
    if (novoValor instanceof Cliente) {
      this._cliente = novoValor;
    }
  }

  sacar(valorDoSaque) {
    if (valorDoSaque <= this._saldo) {
      this._saldo -= valorDoSaque;
      return valorDoSaque;
    }
  }

  depositar(valorDoDeposito) {
    if (valorDoDeposito <= 0) {
      return; // isso é chamado de Early Return. Essa técnica consiste em verificarmos todas as situações indesejadas primeiro. Facilita a legibilidade do código
    }
    this._saldo += valorDoDeposito;
  }

  transferir(valorTransferido, conta) {
    const valorSacado = this.sacar(valorTransferido);
    conta.depositar(valorTransferido);
  }
}
