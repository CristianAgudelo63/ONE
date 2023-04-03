/**
 *  Comparadores
 * 
 * >, Mayor a
 * <, Menor a
 * >=, Mayor o igual a
 * <=, Menor o igual a
 *  ==, Igual a
 *  !=, Diferente a
 *  ===, Extrictamente igual a (Compara tipo de variable y el valor)
 * 
 * 
 */

const ciudadesDisponibles = new Array("Bogotá", "Lima", "Santiago", "Buenos Aires");
let ciudadDestino = "Caracas";

{
  console.log(`Verificando pasajes para ${ciudadDestino}`)
  if (ciudadesDisponibles.indexOf(ciudadDestino) >= 0) {
    console.log("Pasaje disponible para venta")
    console.log(" ")
  } else {
    console.log("Ciudad no disponible para viajar")
    console.log(" ")
  }
}

ciudadDestino = "Santiago";

{
  console.log(`Verificando pasajes para ${ciudadDestino}...`)
  if (ciudadesDisponibles.indexOf(ciudadDestino) >= 0) {
    console.log("Pasaje disponible para venta")
    console.log(" ")
  } else {
    console.log("Ciudad no disponible para viajar")
    console.log(" ")
  }
}

/**
 * Comparadores Lógicos
 *  
 *  Y (AND) = &&, Se debe cumplir todas las condiciones.
 *  O (OR) = ||, Se debe cumplir una de las condiciones.
 *  NO (NOT) = !, No se cumple la condición.
 */

let edadPasajero = 9;
let estaAcompanado = false;

{
  console.log(`Verificando la edad: ${edadPasajero} y destino del pasajero: ${ciudadDestino}...`)
  if (!((ciudadesDisponibles.indexOf(ciudadDestino) >= 0)
  && (edadPasajero >= 18 || estaAcompanado))) {
    console.log("No puede viajar")
    console.log(" ")
  } else {
    console.log("Puede viajar")
    console.log(" ")
  }
}

// Negando la condición

edadPasajero = 20;
estaAcompanado = true;

{
  console.log(`Verificando la edad: ${edadPasajero} y destino del pasajero: ${ciudadDestino}...`)
  if (!((ciudadesDisponibles.indexOf(ciudadDestino) >= 0)
  && (edadPasajero >= 18 || estaAcompanado))) {
    console.log("No puede viajar")
    console.log(" ")
  } else {
    console.log("Puede viajar")
    console.log(" ")
  }
}

// Comparadores anidados

edadPasajero = 8;
estaAcompanado = false;
ciudadDestino = "Bogotá";
let destino = (ciudadesDisponibles.indexOf(ciudadDestino) >= 0);
let pasajero = (edadPasajero >= 18 || estaAcompanado);
let tienePasaporte = true;

{
  console.log(`Verificando la edad: ${edadPasajero} y destino del pasajero: ${ciudadDestino}...`)
  if ((destino && pasajero && tienePasaporte)) {
    console.log("Puede viajar")
  } else {
    console.log("No puede viajar")
  }
}