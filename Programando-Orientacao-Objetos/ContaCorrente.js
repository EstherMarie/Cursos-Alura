import { Cliente } from "./Cliente.js";

export class ContaCorrente {
  constructor(agencia, { nome, cpf }) {
    this._agencia = agencia;
    this._cliente = {
      nome: nome,
      cpf: cpf,
    };
  }

  static numeroDeContas = 0;
  _saldo = 0;

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
}
