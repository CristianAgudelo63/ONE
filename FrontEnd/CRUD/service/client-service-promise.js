// PROMISE

const listaCliente = () => {
  const promise = new Promise((resolve,reject) =>{
    const HTTP = new XMLHttpRequest;

    // abrir HTTP (método, url)

    /**
     * MÉTODOS HTTP -> CRUD
     * 
     * Create -> POST
     * Read -> GET
     * Update -> PUT/PATCH
     * Delete -> DELETE
    */

    HTTP.open("GET", "http://localhost:3000/perfil")

    HTTP.send()

    HTTP.onload = () => {
      /**
       * JSON.parse(HTTP.response)
       * Convierte del formato HTTP al formato JSON
       */
      let response = JSON.parse(HTTP.response)

      if (HTTP.status >= 400) {
        reject(response)
      } else {
        resolve(response)
      }
    }
  }) 

  return promise
}

listaCliente().then((data) => {
  data.forEach(perfil => {
    let nuevaLinea = crearNuevaLinea(perfil.nombre, perfil.email)
    table.appendChild(nuevaLinea)
  });
}).catch((error) => alert(`Ocurrio un error`))