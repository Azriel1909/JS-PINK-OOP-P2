import { Cliente } from './Cliente.js'
import { CuentaAhorro } from './Cuentas/CuentaAhorro.js'
import { CuentaCorriente } from './Cuentas/CuentaCorriente.js'
import { CuentaNomina } from './Cuentas/CuentaNomina.js'
import { Empleado } from './Empleados/Empleado.js'
import { SistemaDeAutenticacion } from './SistemaDeAutenticacion.js'


const cliente1 = new Cliente('Ximena','9909','1234567899')
cliente1.asignarClave('9999')
console.log(SistemaDeAutenticacion.login(cliente1, '9999'))


const cuentaCliente1 = new CuentaCorriente(cliente1,'1','001')

console.log(`Cuenta de ${cliente1.nombreCliente}:`)
console.log(cuentaCliente1)

console.log('\nDEPOSITO')
let saldoCliente1 = cuentaCliente1.verSaldo()
console.log(`Saldo actual de ${cliente1.nombreCliente}: ${saldoCliente1}`)
saldoCliente1 = cuentaCliente1.deposito(5000)
console.log(`Saldo actual de ${cliente1.nombreCliente}: ${saldoCliente1}`)

const cliente2 = new Cliente('Gerardo', '11011', '1234567811')
const cuentaCliente2 = new CuentaCorriente(cliente2,'2','002')

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
console.log(`CANTIDAD DE CUENTAS REGISTRADAS`)

console.log('\nGESTIÓN DE CUENTAS DE AHORRO')
const cuentaAhorroCliente1 = new CuentaAhorro(cliente1, '9999', '001', 0)
const cuentaAhorroCliente2 = new CuentaAhorro(cliente2, '11011', '002', 0)

console.log('\nCUENTA CORRIENTE\n> Aplica comisión.')
console.log(cuentaCliente1)
cuentaCliente1.deposito(3050)
console.log(cuentaCliente1.verSaldo())
console.log('RETIRO DE CUENTA')
console.log(cuentaCliente1.verSaldo())
cuentaCliente1.retiro(55)
console.log(cuentaCliente1.verSaldo())

console.log('\nCUENTA DE AHORRO')
console.log(cuentaAhorroCliente1)
cuentaAhorroCliente1.deposito(2055)
console.log(cuentaAhorroCliente1.verSaldo())
console.log('RETIRO DE CUENTA')
console.log(cuentaAhorroCliente1.verSaldo())
cuentaAhorroCliente1.retiro(30)
console.log(cuentaAhorroCliente1.verSaldo())

const CuentaNominaCliente1 = new CuentaNomina(cliente1, '010101','001', 200)
console.log(CuentaNominaCliente1)
console.log(CuentaNominaCliente1.verSaldo())
CuentaNominaCliente1.retiro(100)
console.log(CuentaNominaCliente1.verSaldo())

console.log('\nEMPLEADOS')

const empleado1 = new Empleado ('Dan Arroyo','12345', 10000)
empleado1.asignarClave('12345')
const gerente1 = new Empleado ('Alejandro Hernández','23456', 12000)
const director1 = new Empleado ('Conratt Toledo','34567', 15000)

console.log('\nEMPLEADO 1' + empleado1.mostrarBono() )
console.log('EMPLEADO 2' + gerente1.mostrarBono())
console.log('EMPLEADO 3' + director1.mostrarBono())

// POLIMORFISMO
/**Función o método con un atributo del mismo nombre en diferentes clases (Estas clases no están relacionadas entre sí en un esquema de herencia),"Gestión de atributos de diferentes formas"  */

// GESTIÓN DE CLAVES, autenticación 

console.log('\nGESTIÓN DE CLAVES')

console.log(SistemaDeAutenticacion.login(empleado1, '12345'))

// INTERFACES - PUNTO EN DONDE EXISTE COMUNICACIÓN COMO (CLAVE)
