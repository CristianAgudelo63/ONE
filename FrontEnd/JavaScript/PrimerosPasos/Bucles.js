const Datos = [
  {
    'ciudad': "Bogotá",
    'precio': 500
  },
  {
    'ciudad': "Lima",
    'precio': 400
  },
  {
    'ciudad': "Buenos Aires",
    'precio': 380
  },
  {
    'ciudad': "Montevideo",
    'precio': 200
  }
]

let presupuesto = 210;
let i = 0;

{
  while (i < Datos.length && Datos[i].precio > presupuesto) {
    i++
  }
  if (i == Datos.length) {
    console.log("No tenemos pasajes disponibles");
  } else {
    console.log(`Puedes comprar el pasaje para ${Datos[i].ciudad}`);
  }
  
}

// Condicional con for
let ciudadSeleccionada = '';
presupuesto = 100;

{
  for (let i = 0; i < Datos.length && ciudadSeleccionada == ''; i++) {
    if (Datos[i].precio <= presupuesto) {
      ciudadSeleccionada = Datos[i].ciudad
    } 
  }
  
  if (i == Datos.length) {
    console.log("No tenemos pasajes disponibles");
  } else {
    console.log(`Puedes comprar el pasaje para ${Datos[i].ciudad}`);
  }
}
