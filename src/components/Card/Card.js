import '../Boton/Boton.css';
import './Card.css';

function Card({ mascota, dueno, fecha, hora, sintomas, id, setCitas, citas }) {

  const eliminar = () => {
    const nuevasCitas = [...citas];
    nuevasCitas.splice(id, 1);
    setCitas(nuevasCitas);
  };

  return (
    <div className="card">
      <ul>
        <li><b>Mascota:</b> {mascota}</li>
        <li><b>Dueño:</b> {dueno}</li>
        <li><b>Fecha:</b> {fecha}</li>
        <li><b>Hora:</b> {hora}</li>
        <li><b>Sintomas:</b> {sintomas}</li>
        <input type="hidden" value={id} name="index" />
      </ul>
      <button onClick={eliminar} className="allMayus eliminar">Eliminar X</button>
    </div>
  );
}

export default Card;
