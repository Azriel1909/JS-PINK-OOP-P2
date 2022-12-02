export class Empleado {
  #nombre
  #dni
  #salario
  #clave

  constructor(nombre, dni, salario, clave) {
    this.#nombre = nombre
    this.#dni = dni
    this.#salario = salario
    this.#clave = ''
  }

  mostrarBono() {
    return this.#salario
  }

  _mostrarBono(bono) {
    return this.#salario + this.#salario*bono/100
  }

  asignarClave(clave) {
    this.#clave = clave 
  }

  autenticable(clave) {
    return clave == this.#clave
  }
}