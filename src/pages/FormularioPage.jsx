import React from 'react'
import "../Container.css";
import Formulario from "../Formulario"


function FormularioPage({ listaCitas, setListaCitas, contador, setContador }) {
  return (
    <div className="container">
        <Formulario
        listaCitas={listaCitas}
        setListaCitas={setListaCitas}
        contador={contador}
        setContador={setContador}
        />
    </div>

  )
}

export default FormularioPage