import { useState } from 'react'
import './campoTexto.css'

export const CampoTexto = (props) => {
  let placeholderModificado = `${props.placeholder}...`
  let [valor, actualizarValor] = useState("")

  const manejarCambio = (e) =>{
    actualizarValor(e.target.value)
  }

  return (
    <div className='campo-texto'>
      <label>{props.titulo.toUpperCase()}</label>
      <input 
        placeholder={placeholderModificado}
        required={props.required}
        value={valor}
        onChange={manejarCambio}
        >
      </input>
    </div>
  )
}