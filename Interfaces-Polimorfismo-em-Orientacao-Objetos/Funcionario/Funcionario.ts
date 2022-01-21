export class Funcionario{
    private _nome: string;
    private _salario: number;
    private _cpf: number;
    private _senha: string | number;

    constructor(nome, salario, cpf) {
        this._nome = nome;
        this._salario = salario;
        this._cpf = cpf;

        this.bonificacao = 1;
        this._senha;
    }

    autenticar(senha) {
        return senha ==this._senha;
    }

    cadastrarSenha(senha){
        this._senha = senha;
    }
}