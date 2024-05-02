import React, { useState } from 'react';

function Formulario({ handleSubmit }) {
  const [formValues, setFormValues] = useState({
    mascota: '',
    propietario: '',
    fecha: '',
    hora: '',
    sintomas: ''
  });

  const handleChange = e => {
    setFormValues(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  }

  const submitForm = e => {
    e.preventDefault();
    handleSubmit(formValues);
    setFormValues({
      mascota: '',
      propietario: '',
      fecha: '',
      hora: '',
      sintomas: ''
    });
  }

  return (
    <div className="one-half column">
      <h2>Crear mi Cita</h2>
      <form onSubmit={submitForm}>
        <label>Nombre Mascota</label>
        <input 
          type="text"
          name="mascota"
          value={formValues.mascota}
          onChange={handleChange}
        />
        <label>Nombre Dueño</label>
        <input
          type="text"  
          name="propietario"
          value={formValues.propietario}
          onChange={handleChange} 
        />
        <label>Fecha</label>  
        <input
          type="date"
          name="fecha"
          value={formValues.fecha} 
          onChange={handleChange}
        />
        <label>Hora</label>
        <input  
          type="time"
          name="hora"
          value={formValues.hora}
          onChange={handleChange}
        />
        <label>Síntomas</label>
        <textarea  
          name="sintomas"
          value={formValues.sintomas}
          onChange={handleChange}
        />
        <button type="submit">Agregar Cita</button>
      </form>
    </div>
  );
}

export default Formulario;
