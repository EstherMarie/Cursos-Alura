"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Cliente_1 = require("./Cliente");
const ContaCorrente_1 = require("./Conta/ContaCorrente");
const adalberto = new Cliente_1.Cliente('Adalberto', 12345678900, 12345);
console.log(adalberto);
const contaAdalberto = new ContaCorrente_1.ContaCorrente("Adalberto", 1505);
const contaJessica = new ContaCorrente_1.ContaCorrente("Jessica", 1505);
contaAdalberto.depositar(100);
contaAdalberto.transferir(50, contaJessica);
console.log(contaAdalberto);
console.log(contaJessica);