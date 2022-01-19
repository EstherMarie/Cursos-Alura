"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaSalario = void 0;
const Conta_js_1 = require("./Conta.js");
class ContaSalario extends Conta_js_1.Conta {
    constructor(cliente) {
        super(0, cliente, 100);
    }
    sacar(valor) {
        const taxa = 1.01;
        return this._sacar(valor, taxa);
    }
}
exports.ContaSalario = ContaSalario;
