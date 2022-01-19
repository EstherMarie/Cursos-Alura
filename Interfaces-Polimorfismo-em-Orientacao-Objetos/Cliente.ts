export class Cliente {
  nome: string;
  private _cpf: number;
  private _senha: string | number;

  constructor(nome: string, cpf: number, senha: number | string) {
    this.nome = nome;
    this._cpf = cpf;
    this._senha = senha;
  }

  get cpf() {
    return this._cpf;
  }
}