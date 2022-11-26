export class Cuenta {
  // Definir atributos
  // Atributos privados
  #cliente
  #saldo
  // Construir pieza
  // Atributos públicos
  constructor(cliente, numero, agencia, saldo) {
    this.numero = numero
    this.agencia = agencia
    this.#cliente = cliente
    this.#saldo = saldo
  }
  // Métodos
  deposito(valor) { // Dato primitivo 
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