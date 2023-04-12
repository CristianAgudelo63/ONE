class Cliente{
  nombreCliente;
  dniCliente;
  rutCliente;
}

class CuentaCorriente{

  numeroCuenta;
  #saldo;
  banco;

  constructor(){
    this.numeroCuenta = ''
    this.#saldo = 0;
    this.banco = '';
  }

  depositarEnCuenta(valor){
    if (valor > 0)
      this.#saldo += valor;
    return this.#saldo;
  }

  retirarDeCuenta(valor){
    if (valor <= this.saldo) {
      this.#saldo -= valor;
      return this.#saldo;
    }else{ 
      console.log(`No puedes retirar`)
    }
  }

  verSaldo(){
    return this.#saldo;
  }
}

const cuentaLeonardo = new CuentaCorriente();

let saldo = cuentaLeonardo.verSaldo();

console.log(`El saldo actual es: ${saldo}`)

saldo = cuentaLeonardo.depositarEnCuenta(1000)
console.log(`El saldo actual es: ${saldo}`)

saldo = cuentaLeonardo.retirarDeCuenta(99)
console.log(`El saldo actual es: ${saldo}`)

saldo = cuentaLeonardo.depositarEnCuenta(1)
console.log(`El saldo actual es: ${saldo}`)

saldo = cuentaLeonardo.depositarEnCuenta(425)
console.log(`El saldo actual es: ${saldo}`)

saldo = cuentaLeonardo.retirarDeCuenta(1234)
console.log(`El saldo actual es: ${saldo}`)