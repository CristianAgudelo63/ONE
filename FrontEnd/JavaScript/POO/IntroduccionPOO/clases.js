class Cliente{
  nombreCliente;
  dniCliente;
  rutCliente;
}

class CuentaCorriente{

  /**
   * Se puede agregar atributos privador poniendo un # antes del atributo
   * 
   * Ejemplo: #saldo
   * 
   * En consola se nos oculta esté valor
   */

  numeroCuenta;
  #saldo;
  banco;

  /**
   * Un constructor le da valores por defecto para que JS
   * reconozca el tipo de variable
   */
  constructor(){
    this.numeroCuenta = ''
    this.#saldo = 0;
    this.banco = '';
  }

  depositarEnCuenta(valor){
    if (valor > 0){
      this.#saldo += valor;
    }
  }

  retirarDeCuenta(valor){
    if (valor <= this.saldo) {
      this.#saldo -= valor;
    } else {
      console.log(`No puedes retirar`)
    }
  }
}

const cuentaLeonardo = new CuentaCorriente();

cuentaLeonardo.depositarEnCuenta(1000)
//console.log(cuentaLeonardo)

cuentaLeonardo.retirarDeCuenta(10000)
console.log(cuentaLeonardo)