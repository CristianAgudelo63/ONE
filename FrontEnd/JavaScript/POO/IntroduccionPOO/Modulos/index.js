// Importación de clases
import { Cliente } from './cliente.js';
import { CuentaCorriente } from './cuentaCorriente.js'

const cliente = new Cliente("Leonardo","1234","v1234");
const cuentaLeonardo = new CuentaCorriente(cliente, "1", "ADFA");

const cliente2 = new Cliente("María","43245","f34543");
const cuentaMaria = new CuentaCorriente(cliente2, "2", "DFHT");

console.log(cuentaLeonardo)
console.log(cuentaMaria)

let saldoLeonardo = cuentaLeonardo.verSaldo()
saldoLeonardo = cuentaLeonardo.depositarEnCuenta(100000)
console.log(`El saldo actual (CuentaLeonardo) es de: ${saldoLeonardo}`)

let saldoMaria = cuentaMaria.verSaldo()
console.log(`El saldo actual (CuentaMaría) es de: ${saldoMaria}`)

cuentaLeonardo.tranferirParaCuenta(100, cuentaMaria)
console.log(`Transfiriendo a Maria...`)

saldoMaria = cuentaMaria.verSaldo()
console.log(`El saldo actual (CuentaMaría) es de: ${saldoMaria}`)

console.log(`Cantidad de cuentas que hay: ${CuentaCorriente.cantidadDeCuentas}`)