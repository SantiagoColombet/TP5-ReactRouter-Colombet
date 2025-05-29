//  import { useState } from 'react'
import './App.css'
import './index.css'
import { Routes, Route, Link,  } from 'react-router-dom'
import { useState, useEffect } from "react";
import './App.css'
import "./Container.css";
import Home from './pages/Home';
import CitasPage from './pages/CitasPage';
import FormularioPage from './pages/FormularioPage';


function App() {
  const [listaCitas, setListaCitas] = useState([]);
  const [contador, setContador] = useState(0);
  const [cargado, setCargado] = useState(false);

  useEffect(() => {
    const citasGuardadas  = localStorage.getItem("listaCitas");
    const contadorGuardado = localStorage.getItem("contador");
    if (citasGuardadas) {
      setListaCitas(JSON.parse(citasGuardadas));
    }
    if (contadorGuardado) {
      setContador(JSON.parse(contadorGuardado));
    }
    setCargado(true);
  }, []);
  useEffect(() => {
    if (cargado){
      localStorage.setItem("listaCitas", JSON.stringify(listaCitas));
      localStorage.setItem("contador", JSON.stringify(contador));
    }  
  }, [listaCitas, contador, cargado]);

  return (
    <>
      <nav className="navbar">
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/formulario">Formulario</Link></li>
          <li><Link to="/citas">Citas</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route
          path="/formulario"
          element={
            <FormularioPage
              listaCitas={listaCitas}
              setListaCitas={setListaCitas}
              contador={contador}
              setContador={setContador}
            />
          }
        />
        <Route
          path="/citas"
          element={
            <CitasPage
              listaCitas={listaCitas}
              setListaCitas={setListaCitas}
            />
          }
        />
      </Routes>
    </>
  )
}


export default App
