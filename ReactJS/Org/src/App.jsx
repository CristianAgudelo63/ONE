import { useState } from "react"
import Header from "./components/Header"
import { Formulario } from "./components/Formulario"
import {MiOrg} from './components/miOrg'

const App = () => {

  const [mostrarFormulario, actualizarMostrar] = useState(true)

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  return (
    <>
      <Header/>
      <MiOrg cambiarMostrar={cambiarMostrar}/>
      {/* {mostrarFormulario === true ? <Formulario/> : <div></div>} */}
      {/* {mostrarFormulario ? <Formulario/> : <></>} */}
      {mostrarFormulario && <Formulario/> }
    </>
  )
}

export default App
