class Cliente{
  nombreCliente;
  dniCliente;
  rutCliente;
}

class CuentaCorriente{
  numero;
  saldo;
  agencia;


  /**
   * this
   * 
   * Generaliza el atributo al que se está accediendo
   * 
   */
  depositarEnCuenta(valor){
    this.saldo += valor;
  }
}

const cliente1 = new Cliente();
const cuentaCorriente1 = new CuentaCorriente();

cliente1.nombreCliente = "José";
cliente1.dniCliente = "13232";
cliente1.rutCliente = "23dfwe2"
cuentaCorriente1.numero = "232323";
cuentaCorriente1.saldo = 5000;

const cliente2 = new Cliente();
const cuentaCorriente2 = new CuentaCorriente();

cliente2.nombreCliente = "Leonardo";
cliente2.dniCliente = "13804050";
cliente2.rutCliente = "23dfwe2"
cuentaCorriente2.numero = "123434343";
cuentaCorriente2.saldo = 1000;

console.log(cliente1);
console.log(cuentaCorriente1);

console.log(cliente2);
console.log(cuentaCorriente2);