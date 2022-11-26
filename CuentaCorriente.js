import { Cliente } from "./Cliente.js"
export class CuentaCorriente {
  #cliente
  numero
  agencia
  #saldo
  static cantidadDeCuentas = 0
  // No puedo acceder a el nunca como this y se le atribuye el valor directo de la clase

  set cliente(valor) {
    if (valor instanceof Cliente){
      this.#cliente = valor
      // Protejo mi atributo privado
    }
  }

  get cliente() {
    return this.#cliente
  }

  constructor(cliente, numero, agencia) {
    this.cliente = cliente
    this.numero = numero
    this.agencia = agencia
    this.#saldo = 0;
    CuentaCorriente.cantidadDeCuentas++;
  }

  // Métodos
  deposito(valor) { 
    if (valor > 0) 
      this.#saldo += valor
    return this.#saldo
  }
  retiro(valor) {
    if (valor <= this.#saldo) 
      this.#saldo -= valor
    return this.#saldo
  }
  verSaldo() {
    return this.#saldo
  }
  transferencia(valor, cuentaDestino) {
    this.retiro(valor)
    cuentaDestino.deposito(valor) 
  }
}
