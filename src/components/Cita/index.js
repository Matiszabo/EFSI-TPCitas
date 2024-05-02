import React from 'react';

function Cita(props) {
  const { mascota, propietario, fecha, hora, sintomas } = props;

  return (
    <div className="cita">
      <p>Mascota: <span>{mascota}</span></p>
      <p>Dueño: <span>{propietario}</span></p>
      <p>Fecha: <span>{fecha}</span></p>
      <p>Hora: <span>{hora}</span></p>
      <p>Sintomas: <span>{sintomas}</span></p>
      <button className="button eliminar u-full-width">Eliminar ×</button>
    </div>
  );
}

export default Cita;
