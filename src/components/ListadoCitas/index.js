import React from 'react';

function ListadoCitas() {
  const citas = [
    {
      mascota: 'Nina',
      propietario: 'Martin',
      fecha: '2021-08-05',
      hora: '08:20',
      sintomas: 'Le duele la pierna'
    },
    {
      mascota: 'Sifon',
      propietario: 'Flecha',
      fecha: '2023-08-05',
      hora: '09:24',
      sintomas: 'Duerme mucho'
    },
    {
      mascota: 'Floki',
      propietario: 'Ari',
      fecha: '2023-08-05',
      hora: '16:15',
      sintomas: 'No está comiendo'
    }
  ];

  const listaCitas = citas.map((cita, index) => (
    <div key={index} className="cita">
      <p>Mascota: <span>{cita.mascota}</span></p>
      <p>Dueño: <span>{cita.propietario}</span></p>
      <p>Fecha: <span>{cita.fecha}</span></p>
      <p>Hora: <span>{cita.hora}</span></p>
      <p>Sintomas: <span>{cita.sintomas}</span></p>
      <button className="button eliminar u-full-width">Eliminar ×</button>
    </div>
  ));

  return (
    <div>
      <h2>Listado de citas</h2>
      {listaCitas}
    </div>
  );
}

export default ListadoCitas;