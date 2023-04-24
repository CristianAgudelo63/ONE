// FETCH API

const ListaCliente = () => {
  return fetch("http://localhost:3000/perfil").then(respuesta => {
   return respuesta.json()
  })
}

ListaCliente().then((data) => {
  data.forEach(perfil => {
    let nuevaLinea = crearNuevaLinea(perfil.nombre, perfil.email)
    table.appendChild(nuevaLinea)
  });
}).catch((error) => alert(`Ocurrio un error`))