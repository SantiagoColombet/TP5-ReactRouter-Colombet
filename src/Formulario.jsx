import React from 'react'
import CrearCita from './CrearCita'

function Formulario({setContador, contador, listaCitas, setListaCitas }) {
  return (
      <div className=""> 
          <h1>CREA MI CITA</h1>
          <CrearCita setContador = {setContador} contador = {contador} listaCitas = {listaCitas} setListaCitas = {setListaCitas}/>
      </div>
  )
}

export default Formulario