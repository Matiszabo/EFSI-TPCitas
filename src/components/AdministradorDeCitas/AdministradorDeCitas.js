import Card from '../Card/Card';
import Subtitulo from '../Subtitulo/Subtitulo';

function AdministradorDeCitas({ citas, setCitas }) {
  return (
    <div className="administradorDeCitas">
      <Subtitulo subtitulo={"Administra tus citas"}></Subtitulo>
      <div className="cards">
        {Array.isArray(citas) && citas.map((cita, index) => (
          <Card
            key={index}
            mascota={cita.nombremascota}
            dueno={cita.nombredueno}
            fecha={cita.fecha}
            hora={cita.hora}
            sintomas={cita.sintomas}
            id={index}
            setCitas={setCitas}
            citas={citas}
          />
        ))}
      </div>
    </div>
  );
}

export default AdministradorDeCitas;
