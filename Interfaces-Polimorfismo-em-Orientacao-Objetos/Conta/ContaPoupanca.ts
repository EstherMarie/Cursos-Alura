import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta {
  constructor(saldoInicial: number, cliente: string, agencia: number) {
    super(saldoInicial, cliente, agencia);
  }

  sacar(valor: number) {
    const taxa = 1.02;
    return this._sacar(valor, taxa);
  }
}