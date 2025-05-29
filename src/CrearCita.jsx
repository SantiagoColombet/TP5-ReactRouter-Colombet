import React from 'react';
import Citas from './Citas';
import InputCita from './InputCita';

function CrearCita({setContador, contador, listaCitas, setListaCitas}) {

    
  return (
    <>
      <InputCita setContador = {setContador} contador = {contador} listaCitas = {listaCitas} setListaCitas = {setListaCitas}/>
    </>
  );
}

export default CrearCita;
