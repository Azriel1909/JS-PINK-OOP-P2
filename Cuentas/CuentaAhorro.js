import { Cuenta } from "./Cuenta.js";

export class CuentaAhorro extends Cuenta {
  constructor(cliente, numero, agencia, saldo) {
    super(cliente, numero, agencia, saldo)
  }
  retiro(valor) {
    super._retiro(valor,2)
  }
}