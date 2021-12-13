import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Ricardo", 12312312333);

console.log(cliente1.nome);

cliente1.nome = "Richard";

console.log(cliente1.nome);

const conta1 = new ContaCorrente(1555, cliente1);
console.log(conta1.cliente);
