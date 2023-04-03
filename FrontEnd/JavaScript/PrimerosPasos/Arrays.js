/** 
 * Areglos
 * 
 * Es un tipo de variable que contiene multiples valores,
 * su índice empieza desde 0, siendo éste el primer elemento 
 * 
*/

// Array de forma larga
const ciudadesDisponibles = new Array("Bogotá", "Lima", "Santiago", "Buenos Aires");

// Array de forma abreviada
const paisesDisponibles = ["Colombia", "Perú", "Chile", "Argentina"];

// Métodos en los Arrays
{
  /**
    *  push(): Agrega el elemento al final del Array.
    *  unshift(): Agrega el elemento al inicio del Array.
    *  splice(): Elimina un elemento y poderlo cambiar por otro.
    *  shift(): Remueve el primer elemento.
    *  pop(): Remueve el último elemento.
    *  filter(): Realiza un filtro y busca si existe el elemento en la lista.
    *  join(): Une los arreglos volviendolo una cadena de caracteres.
    *  concat(): Une dos arreglos.
  */

  paisesDisponibles.push("Brazil");
  ciudadesDisponibles.push("Sao Pablo");
  console.log("Resultado de PUSH()")
  console.log(paisesDisponibles);
  console.log(ciudadesDisponibles);
  console.log(" ")

  paisesDisponibles.unshift("Ecuador");
  ciudadesDisponibles.unshift("Quito");
  console.log("Resultado UNSHIFT()")
  console.log(paisesDisponibles);
  console.log(ciudadesDisponibles);
  console.log(" ")

  paisesDisponibles.splice(1,2,"Venezuela");
  paisesDisponibles.splice(1,2,"Caracas");
  console.log("Resultado SPLICE()")
  console.log(paisesDisponibles);
  console.log(ciudadesDisponibles);
  console.log(" ")

  paisesDisponibles.shift();
  ciudadesDisponibles.shift();
  console.log("Resultado SHIFT()")
  console.log(paisesDisponibles);
  console.log(ciudadesDisponibles);
  console.log(" ")

  paisesDisponibles.pop();
  ciudadesDisponibles.pop();
  console.log("Resultado POP()")
  console.log(paisesDisponibles);
  console.log(ciudadesDisponibles);
  console.log(" ")

  let paisesFiltrados = paisesDisponibles.filter((e) => e == "Brazil");
  console.log("Resultado FILTER()");
  console.log(paisesFiltrados);
  console.log(" ");

  let listaPaisesYCuiudades = paisesDisponibles.concat(ciudadesDisponibles);
  console.log("Resultado CONCAT()");
  console.log(listaPaisesYCuiudades);
  console.log(" ")

  console.log("Resultado Final")
  console.log(paisesDisponibles);
  console.log(ciudadesDisponibles);
  console.log(" ")
}

// Posiciones con Métodos.
{
  console.log("Resultado de la posición")
  console.log(`Posiciones: ${paisesDisponibles[0]}, ${ciudadesDisponibles[2]}`);
  console.log(" ")

  // Ordena la lista de forma alfabetica.
  console.log("Resultado SORT()")
  console.log(ciudadesDisponibles.sort());
  console.log(" ")

  // Muestra la posición del elemento, muestra un valor >= 0
  // si muestra -1, no existe en el Arreglo.
  console.log("Resultado INDEXOF()")
  console.log(`Santiago está en la posición ${ciudadesDisponibles.indexOf('Santiago')}`)
  console.log(" ")

}

// Propiedades
console.log("Resultado LENGTH")
console.log(`En la lista de cuidades tenemos ${ciudadesDisponibles.length} elementos`)
console.log(`En la lista de paises tenemos ${paisesDisponibles.length} elementos`)