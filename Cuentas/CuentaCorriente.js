import { Cuenta } from "./Cuenta.js"
export class CuentaCorriente extends Cuenta {
  static cantidadDeCuentas = 0
  // Llamar a la clase padres (su constructor)
  constructor(cliente, numero, agencia) {
    super(cliente, numero, agencia, 0)
    CuentaCorriente.cantidadDeCuentas++;
  }

  retiro(valor) {
    super._retiro(valor, 5)
  }
}
