import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
  static numeroDeContas = 0;

  constructor(cliente: string, agencia: number) {
    super(0, cliente, agencia);
    ContaCorrente.numeroDeContas += 1;
  }

  //sobreescrevendo o comportamento de sacar
  sacar(valor: number) {
    let taxa = 1.1;
    return this._sacar(valor, taxa);
  }
}