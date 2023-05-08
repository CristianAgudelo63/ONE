import './listaOpciones.css'

export const ListaOpciones = (props) => {

  /** Método .map
   *  Estructura: arreglo.map ((arreglo, index)=>{
   * return elemento JSX
   * })
   * 
   * .map, NO acepta objetos
   * 
   *  Para que pueda funcionar correctamente,
   *  React necesita un identificador para cada elemento hijo.
    *  Para ello, se utiliza key={index},
    *  donde se le pasa como párametro el index del arreglo
   */
   
  const Equipos = [
    "Programación",
    "Data Science",
    "DevOps",
    "UX & UI",
    "Móvil",
    "Gestión e Innovación"
  ]

  const manejarCambio = (e) =>{
    props.actualizarEquipo(e.target.value)
  }

  return (
    <div className='listaOpciones'>
      <label>Equipos</label>
      <select value={props.valor} onChange={manejarCambio}>
        <option value="" desabled defaultValue="" hidden>Seleccionar Equipo</option>
        { Equipos.map((Equipos, index)=> <option key={index}>{Equipos}</option>) }
      </select>
    </div>
  ) 
}