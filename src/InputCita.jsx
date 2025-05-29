import { useState } from 'react';
import React from 'react'
import './InputCita.css'

function InputCita({setContador, contador, setListaCitas}) {
const [cita, setCita] = useState({
  mascota: "",
  propietario: "",
  fecha: "",
  hora: "",
  sintomas: "",
  id: contador
});

const guardarCambio = (e) =>{
  setCita({...cita, [e.target.name] : e.target.value})
}

const enviarForm = (e) =>{  
  e.preventDefault()
  if (
    !cita.mascota.trim() ||
    !cita.propietario.trim() ||
    !cita.fecha ||
    !cita.hora ||
    !cita.sintomas.trim()
  ) {
    alert('Por favor completá todos los campos.');
    return;
  }
  const nuevaCita = {
    ...cita,
    id: contador,
  };
  setListaCitas((lista) => [...lista, nuevaCita]);
  setContador(contador + 1);
  setCita( {mascota: "",
            propietario: "",
            fecha: "",
            hora: "",
            sintomas: "" 
            })
}
  return (
    <form onSubmit={enviarForm}>
        <label>Nombre Mascota</label>
        <input type="text" name="mascota" className="u-full-width" placeholder="Nombre Mascota" value={cita.mascota} onChange={guardarCambio}/>

        <label>Nombre Dueño</label>
        <input type="text" name="propietario" className="u-full-width" placeholder="Nombre dueño de la mascota" value={cita.propietario} onChange={guardarCambio}/>
        
        <label>Fecha</label>
        <input type="date" name="fecha" className="u-full-width" value={cita.fecha} onChange={guardarCambio}/>
        
        <label>hora</label>
        <input type="time" name="hora" className="u-full-width" value={cita.hora} onChange={guardarCambio}/>
        
        <label>Sintomas</label>
        <textarea type="textarea" name="sintomas" className="u-full-width" value={cita.sintomas} onChange={guardarCambio}/>

        <button type="submit" className="u-full-width button-primary">Agregar Cita</button>
    </form>
  )
}

export default InputCita