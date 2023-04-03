const CiudadesDisponibles = ["Bogotá", "Lima", "Santiago", "Buenos Aires"];

let ciudadDestino = "Bogotá";
let valorPasaje = 0;
let destino = (CiudadesDisponibles.indexOf(ciudadDestino) >= 0);


// Condición con if 
{
  console.log(`Verificando valor del pasaje...`);

  if (destino) {
    if (ciudadDestino == "Bogotá") {
      valorPasaje = 500
    }else if (ciudadDestino == "Buenos Aires"){
      valorPasaje = 400
    }else if (ciudadDestino == "Lima"){
      valorPasaje = 380
    }else if (ciudadDestino == "Santiago"){
      valorPasaje = 200 
    }
    console.log(`El valor del pasaje es de ${valorPasaje} a ${ciudadDestino}`);
  } else{
    console.log("Ciudad no disponible para viajar")
  }
}

// Condición con switch

ciudadDestino = "Santiago";

{
  if (destino) {
    switch (ciudadDestino) {
      case "Bogotá":
        valorPasaje = 500;
        break;
      case "Buenos Aires":
        valorPasaje = 400;
        break;
      case "Lima":
        valorPasaje = 380;
        break;
      case "Santiago":
        valorPasaje = 200;
        break;
      default:
        valorPasaje = 0;
        break;
    }
    console.log(`El valor del pasaje es de ${valorPasaje} a ${ciudadDestino}`);
  } else {
    console.log("Ciudad no disponible para viajar")
  }
}

// Optimizando el código

ciudadDestino = "Buenos Aires";

{
  switch (ciudadDestino) {
    case "Bogotá":
      valorPasaje = 500;
      break;
    case "Buenos Aires":
      valorPasaje = 400;
      break;
    case "Lima":
      valorPasaje = 380;
      break;
    case "Santiago":
      valorPasaje = 200;
      break;
    default:
      console.log("Ciudad no disponible para viajar");
      break;
  }

  if (valorPasaje > 0) {
    console.log(`El valor del pasaje es de ${valorPasaje} a ${ciudadDestino}`);
  }
}