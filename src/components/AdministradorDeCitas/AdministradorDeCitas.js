import Card from '../Card/Card';
import Subtitulo from '../Subtitulo/Subtitulo';

function AdministradorDeCitas({ citas, setCitas }) {
  return (
    <div className="administradorDeCitas">
      <Subtitulo subtitulo={"Administra tus citas"}></Subtitulo>
      <div className="cards">
        {citas.map((c, i) => (
          <Card
            key={i}
            mascota={c.nombremascota}
            dueno={c.nombredueno}
            fecha={c.fecha}
            hora={c.hora}
            sintomas={c.sintomas}
            id={i}
            setCitas={setCitas}
            citas={citas}
          />
        ))}
      </div>
    </div>
  );
}

export default AdministradorDeCitas;
