"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaCorrente = void 0;
const Conta_js_1 = require("./Conta.js");
class ContaCorrente extends Conta_js_1.Conta {
    constructor(cliente, agencia) {
        super(0, cliente, agencia);
        ContaCorrente.numeroDeContas += 1;
    }
    //sobreescrevendo o comportamento de sacar
    sacar(valor) {
        let taxa = 1.1;
        return this._sacar(valor, taxa);
    }
}
exports.ContaCorrente = ContaCorrente;
ContaCorrente.numeroDeContas = 0;
