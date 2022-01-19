"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaPoupanca = void 0;
const Conta_js_1 = require("./Conta.js");
class ContaPoupanca extends Conta_js_1.Conta {
    constructor(saldoInicial, cliente, agencia) {
        super(saldoInicial, cliente, agencia);
    }
    sacar(valor) {
        const taxa = 1.02;
        return this._sacar(valor, taxa);
    }
}
exports.ContaPoupanca = ContaPoupanca;
