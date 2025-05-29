import "../Container.css";
import React from 'react'
import Citas from "../Citas"


function CitasPage({listaCitas, setListaCitas}) {
  return (    
    <Citas listaCitas={listaCitas} setListaCitas={setListaCitas} />
  )
}

export default CitasPage

