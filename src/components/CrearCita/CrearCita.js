import Formulario from '../Formulario/Formulario';
import Subtitulo from '../Subtitulo/Subtitulo';

function CrearCita() {
  return (
    <div>
        <Subtitulo subtitulo={"Crear mi cita"}></Subtitulo>
        <Formulario></Formulario>
    </div>
    );
}

export default CrearCita;
