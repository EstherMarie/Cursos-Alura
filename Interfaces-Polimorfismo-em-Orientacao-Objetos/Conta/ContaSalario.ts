import { Conta } from "./Conta.js";

export class ContaSalario extends Conta {
  constructor(cliente: string) {
    super(0, cliente, 100)
  }

  sacar(valor: number) {
    const taxa = 1.01;
    return this._sacar(valor, taxa);
  }
}