import React, { useState } from 'react';
import ListadoCitas from './components/ListadoCitas';
import EstadoCitas from './components/EstadoCitas';
import Formulario from './components/Formulario';

function App() {
  const [citas, setCitas] = useState([
    {
      id: 1,
      mascota: "Toby",
      propietario: "Juan",
      fecha: "2023-01-01",
      hora: "10:00",
      sintomas: "Cojea de la pata delantera derecha"
    }
  ]);

  const agregarCita = cita => {
    cita.id = Date.now();
    setCitas([...citas, cita]);
  }

  return (
    <>
      <Formulario handleSubmit={agregarCita} />
      <div className="container">
        <div className="row">
          <ListadoCitas citas={citas} />        
          <EstadoCitas citas={citas} />
        </div>
      </div>
    </>
  );
}

export default App;
