import { Cliente } from "./Cliente";
import { ContaCorrente } from "./Conta/ContaCorrente";

const adalberto = new Cliente('Adalberto', 12345678900, 12345)
console.log(adalberto)

const contaAdalberto = new ContaCorrente("Adalberto", 1505)
const contaJessica = new ContaCorrente("Jessica", 1505)

contaAdalberto.depositar(100)
contaAdalberto.transferir(50, contaJessica)
console.log(contaAdalberto)
console.log(contaJessica)