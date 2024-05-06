import Boton from '../Boton/Boton';
import './Card.css';

function Card({mascota , dueño, fecha, hora, sintomas}) {
  return (
        <div class="card">
            <ul>
              <li><b>Mascota:</b> {mascota}</li>
              <li><b>Dueño:</b> {dueño}</li>
              <li><b>Fecha:</b> {fecha}</li>
              <li><b>Hora:</b> {hora}</li>
              <li><b>Sintomas:</b> {sintomas}</li>
            </ul>
            <Boton sendText="Eliminar X"></Boton>
        </div>
    );
}

export default Card;
