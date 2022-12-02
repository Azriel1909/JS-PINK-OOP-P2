import { Empleado } from "./Empleado"

export class Gerente extends Empleado {
  constructor(nombre, dni, salario) {
    super(nombre, dni, salario)
  }
  
  mostrarBono() {
    const bono = 5
    return super._mostrarBono(bono)
  }
}