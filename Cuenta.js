export class Cuenta {
  // Definir atributos
  // Atributos privados
  #cliente
  #saldo
  // Construir pieza
  // Atributos públicos
  constructor(cliente, numero, agencia, saldo) {
    if (this.constructor == Cuenta) {
      // Protegemos la clase base Cuenta de que sea instanciada desde el exterior sólo extendida/heredada (CLASE ABSTRACTA)
      throw new Error('No se debe instanciar objetos de la clase cuenta')
    }
    this.numero = numero
    this.agencia = agencia
    this.#cliente = cliente
    this.#saldo = saldo
  }
  // Métodos
  deposito(valor) { // Dato primitivo 
    if (valor > 0) { this.#saldo += valor }
    return this.#saldo
  }
  retiro(valor) {
    _retiro(valor, 0)
  }
  _retiro(valor,comision) {
    valor = valor * (1+comision)/100
    if (valor <= this.#saldo) { this.#saldo -= valor }
    return this.#saldo
  }
  verSaldo() {
    return this.#saldo
  }
  transferencia(valor, cuentaDestino) {
    this.retiro(valor)
    cuentaDestino.deposito(valor) 
  }

  prueba() {
    console.log('MÉTODO PADRE')
  }
}

// HERENCIA
/**
 * Trata que desde un punto padre a punto hijo, se transfieran sus propiedades.
 * Que una clase pueda tomar toda la funcionalidad de otra clase, a partir de que se defina como hija o que se extienda.
 * Extender la clase con: "super"
 */
