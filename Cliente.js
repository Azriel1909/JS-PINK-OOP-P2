export class Cliente {
  nombreCliente 
  dniCliente
  rutCliente
  // autenticable // Puede ser un atributo
  #clave
  // CONSTRUCTOR
  // Es la función que se ejecuta toda vez que se genera una instancia.
  constructor( nombreCliente, dniCliente, rutCliente) {
    this.nombreCliente = nombreCliente
    this.dniCliente = dniCliente
    this.rutCliente = rutCliente
    this.#clave = ''
  }

  asignarClave(clave) {
    this.#clave = clave 
  }

  autenticable(clave) {
    return true 
  }
}

