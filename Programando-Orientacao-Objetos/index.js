import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Ricardo", 12312312333);
const cliente2 = new Cliente("Jolie", 10110110100);

const conta1 = new ContaCorrente(1555, cliente1);

conta1.depositar(500);

conta1.sacar(50);

conta1.depositar(50);

const conta2 = new ContaCorrente(2000, cliente2);

conta1.transferir(250, conta2);
console.log(conta1, conta2);

console.log("Número de contas do ByteBank:", ContaCorrente.numeroDeContas);
