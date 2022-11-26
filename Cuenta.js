export class Cuenta {
  // Definir atributos
  // Atributos privados
  #cliente
  #saldo
  // Construir pieza
  // Atributos públicos
  constructor(tipo, cliente, numero, agencia, saldo) {
    this.tipo = tipo
    this.numero = numero
    this.agencia = agencia
    this.#cliente = cliente
    this.#saldo = saldo
  }
  // Métodos
  deposito(valor) { // Dato primitivo 
    if (this.tipo == 'Corriente') {
      valor = valor * 1.05 // Agregando comisión
    } else if (this.tipo == 'Ahorro') {
      valor = valor * 1.02 // Agregando comisión
    }
    if (valor > 0) 
      this.#saldo += valor
    return this.#saldo
  }
  retiro(valor) {
    if (this.tipo == 'Corriente') {
      valor = valor * 1.05 // Agregando comisión
    } else if (this.tipo == 'Ahorro') {
      valor = valor * 1.02 // Agregando comisión
    }
    if (valor <= this.#saldo) {
      this.#saldo -= valor
    }
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