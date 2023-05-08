import { useState } from 'react'
import './miOrg.css'

export const MiOrg = (props) => {

  //const [nombreDeLaVarable,FunciónActualizar] = useState(valorInicial)
  const [mostrar, actualizarMostrar] = useState(true)

  // const manejarClick = () => {
  //   console.log("Mostrar/Ocultar Elemento", !mostrar)

  //   // Se va a comportar como un interruptot,
  //   // Cuando le damos click pasa del valor de true a false y a la inversa
  //   actualizarMostrar(!mostrar)
  // }

  return (
    <section className='orgSection'>
      <h3 className='titulo'>Mi Organización</h3>
      <img src='/img/add.png' alt='add' onClick={props.cambiarMostrar}/>
    </section>
  ) 
}