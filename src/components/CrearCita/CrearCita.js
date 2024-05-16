import Formulario from '../Formulario/Formulario';
import Subtitulo from '../Subtitulo/Subtitulo';

function CrearCita({ citas, setCitas }) {
  return (
    <div>
      <Subtitulo subtitulo={"Crear mi cita"}></Subtitulo>
      <Formulario citas={citas} setCitas={setCitas}></Formulario>
    </div>
  );
}

export default CrearCita;
