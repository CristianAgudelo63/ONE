export class CuentaCorriente{

  cliente;
  numeroCuenta;
  banco;
  #saldo;
  static cantidadDeCuentas = 0; // static, obtiene todas la cuentas que hay en total

  constructor(cliente, numeroCuenta, banco){
    /**
     * null, le indica a JS que la variable existe,
     * pero su valor explicitamente aún no existe.
     * 
     * undefined, la variable no existe,
     * pero se está utilizando en el código
     * 
     */

    this.cliente = cliente;
    this.numeroCuenta = numeroCuenta;
    this.banco = banco;
    this.#saldo = 0;
    CuentaCorriente.cantidadDeCuentas++;
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
    }
  }

  tranferirParaCuenta(valor, cuentaDestino){
    this.retirarDeCuenta(valor)
    cuentaDestino.depositarEnCuenta(valor)
  }

  verSaldo(){
    return this.#saldo;
  }
}