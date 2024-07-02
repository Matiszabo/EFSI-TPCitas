import React from 'react';
import PropTypes from 'prop-types';
import "./Cita.css";

const Cita = ({ cita, index, eliminarCita }) => (
  <div className="cita">
    <p><strong>Mascota:</strong> <span>{cita.mascota}</span></p>
    <p><strong>Dueño:</strong> <span>{cita.propietario}</span></p>
    <p><strong>Fecha:</strong> <span>{cita.fecha}</span></p>
    <p><strong>Hora:</strong> <span>{cita.hora}</span></p>
    <p><strong>Síntomas:</strong> <span>{cita.sintomas}</span></p>

    <button
      className="button eliminar"
      onClick={() => eliminarCita(index)}
    >
      Eliminar
    </button>
  </div>
);

Cita.propTypes = {
  cita: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  eliminarCita: PropTypes.func.isRequired
};

export default Cita;
