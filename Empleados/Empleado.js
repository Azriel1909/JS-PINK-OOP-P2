export class Empleado {
  #nombre
  #dni
  #salario
  constructor(nombre, dni, salario) {
    this.#nombre = nombre
    this.#dni = dni
    this.#salario = salario
  }

  mostrarBono() {
    return this.#salario
  }

  _mostrarBono(bono) {
    return this.#salario + this.#salario*bono/100
  }
}