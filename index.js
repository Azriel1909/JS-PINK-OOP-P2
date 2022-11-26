// import {CuentaCorriente} from './CuentaCorriente.js'
import { Cliente } from './Cliente.js'
// import { CuentaAhorro } from './CuentaAhorro.js'
import { Cuenta } from './Cuenta.js'

const cliente1 = new Cliente('Ximena','9909','1234567899')
const cuentaCliente1 = new Cuenta('Corriente',cliente1,'1','001',0)

console.log(`Cuenta de ${cliente1.nombreCliente}:`)
console.log(cuentaCliente1)

console.log('\nDEPOSITO')
let saldoCliente1 = cuentaCliente1.verSaldo()
console.log(`Saldo actual de ${cliente1.nombreCliente}: ${saldoCliente1}`)
saldoCliente1 = cuentaCliente1.deposito(5000)
console.log(`Saldo actual de ${cliente1.nombreCliente}: ${saldoCliente1}`)

const cliente2 = new Cliente('Gerardo', '11011', '1234567811')
const cuentaCliente2 = new Cuenta('Corriente',cliente2,'2','002', 0)

console.log(`Cuenta de ${cliente2.nombreCliente}:`)
console.log(cuentaCliente2)

console.log('\nDATOS ANTES DE LA TRANSFERENCIA')
let saldoCliente2 = cuentaCliente2.verSaldo()
console.log(`Saldo actual de ${cliente1.nombreCliente}: ${saldoCliente1}`)
console.log(`Saldo actual de ${cliente2.nombreCliente}: ${saldoCliente2}`)
console.log(`Transferencia de ${cliente1.nombreCliente} a ${cliente2.nombreCliente}`)

console.log('\nDATOS DESPUÉS DE LA TRANSFERENCIA')
cuentaCliente1.transferencia(100,cuentaCliente2)
saldoCliente1 = cuentaCliente1.verSaldo()
saldoCliente2 = cuentaCliente2.verSaldo()

console.log(`Saldo actual de ${cliente1.nombreCliente}: ${saldoCliente1}`)
console.log(`Saldo actual de ${cliente2.nombreCliente}: ${saldoCliente2}`)

console.log('\nGESTIÓN PRIVADA DE DATOS')
console.log(cuentaCliente1.cliente)
console.log(cuentaCliente2.cliente)
console.log('\nGESTIÓN DE DATOS ESTÁTICOS')
console.log(`CANTIDAD DE CUENTAS REGISTRADAS ${Cuenta.cantidadDeCuentas}`)

console.log('\nGESTIÓN DE CUENTAS DE AHORRO')
const cuentaAhorroCliente1 = new Cuenta('Ahorro', cliente1, '9999', '001', 0)
const cuentaAhorroCliente2 = new Cuenta('Ahorro', cliente2, '11011', '002', 0)

console.log('\nCUENTA CORRIENTE\n> Aplica comisión.')
console.log(cuentaCliente1)
cuentaCliente1.deposito
console.log(cuentaCliente1.verSaldo())

console.log('\nCUENTA DE AHORRO')
console.log(cuentaAhorroCliente1)
cuentaAhorroCliente1.deposito(2050)
console.log(cuentaAhorroCliente1.verSaldo())
