import React from 'react'
import './Citas.css';
import BorrarCita from './BorrarCita';


function Citas({listaCitas, setListaCitas}) {
    return (
        <div className='containerCitas'>
          {listaCitas?.map((listaCitas) => (
            <div className="cita">
            <p>Mascota: <span>{listaCitas.mascota}</span></p>
            <p>Dueño: <span>{listaCitas.propietario}</span></p>
            <p>Fecha: <span>{listaCitas.fecha}</span></p>
            <p>Hora: <span>{listaCitas.hora}</span></p>
            <p>Síntomas: <span>{listaCitas.sintomas}</span></p>
            <BorrarCita id = {listaCitas.id} setListaCitas = {setListaCitas} listaCitas={listaCitas}/>
          </div>
          ))}
        </div>
      );
}

export default Citas