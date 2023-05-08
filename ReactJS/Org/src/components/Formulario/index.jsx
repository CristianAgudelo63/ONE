import { useState } from 'react'
import { CampoTexto } from './campoTexto'
import { ListaOpciones }  from './listaOpciones'
import {Boton} from './boton'
import './formulario.css'

export const Formulario = () => {

  const [nombre, actualizarNombre] = useState("")
  const [puesto, actualizarPuesto] = useState("")
  const [foto, actualizarFoto] = useState("")
  const [equipo, actualizarEquipo] = useState("")

  const manejarEnvio = (e) => {
    e.preventDefault()
    
    let datosEnviar = {
      nombre: nombre,
      puesto: puesto,
      foto: foto,
      equipo: equipo
    }
  }

  return (
    <section className='formulario'>
      <form onSubmit={manejarEnvio}>
        <h2>Rellene el formulario para crear el colaborador</h2>
        <CampoTexto 
          required
          titulo="Nombre"
          valor={nombre}
          actualizarValor={actualizarNombre}
          placeholder="Ingresar Nombre"/>

        <CampoTexto
          required
          titulo="Puesto"
          valor={puesto}
          actualizarValor={actualizarPuesto}
          placeholder="Ingresar Puesto"/>

        <CampoTexto
          required
          titulo="Foto"
          valor={foto}
          actualizarValor={actualizarFoto}
          placeholder="Ingresar la URL de foto"/>

        <ListaOpciones 
          valor={equipo}
          actualizarEquipo={actualizarEquipo}
        />

        <Boton texto="Crear Colaborador"/>
      </form>
    </section>
  )
}