// Classe abstrata
export class Conta {
  private _saldo: number;
  private _cliente: string;
  private _agencia: number;

  constructor(saldoInicial: number, cliente: string, agencia: number) {
    if (this.constructor == Conta) {
      throw new Error("Você não deveria instanciar um objeto do tipo Conta Diretamente, pois essa é uma classe abstata")
    }

    this._saldo = saldoInicial;
    this._cliente = cliente;
    this._agencia = agencia;

  }

  set cliente(novoValor) {
    if (novoValor instanceof Cliente) {
      this._cliente = novoValor
    }
  }

  get cliente() {
    return this._cliente
  }

  get saldo() {
    return this._saldo
  }

  //Método abstrato
  sacar(valor: number): number {
    throw new Error("O método Sacar da conta é abstrato")
  }


  protected _sacar(valor: number, taxa: number) {
    const valorSacado = taxa * valor;

    if (this._saldo >= valorSacado) {
      this._saldo -= valorSacado;
      return valorSacado;
    }

    return 0;
  }

  depositar(valor: number) {
    this._saldo += valor
  }

  transferir(valorTransferido: number, conta: Conta) {
    const valorSacado = this.sacar(valorTransferido);
    conta.depositar(valorSacado);
  }
}