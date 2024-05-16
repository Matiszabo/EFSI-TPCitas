import Boton from '../Boton/Boton';
import './Formulario.css';

function Formulario({ citas, setCitas }) {

  const crearCita = (e) => {
    e.preventDefault();
    const nuevaCita = {
      nombremascota: e.target.nombremascota.value,
      nombredueno: e.target.nombredueno.value,
      fecha: e.target.fecha.value,
      hora: e.target.hora.value,
      sintomas: e.target.sintomas.value
    };

    // Mostrar un mensaje de confirmación antes de agregar la cita
    const confirmar = window.confirm("¿Estás seguro de que deseas agregar esta cita?");
    if (confirmar) {
      setCitas([...citas, nuevaCita]);
    }
  }

  return (
    <form onSubmit={crearCita}>
      <div className="casillaForm">
        <label>Nombre Mascota</label>
        <input type="text" name="nombremascota" placeholder="Nombre de tu mascota" required />
      </div>
      <div className="casillaForm">
        <label>Nombre Dueño</label>
        <input type="text" name="nombredueno" placeholder="Nombre dueño de la mascota" required />
      </div>
      <div className="casillaForm">
        <label>Fecha</label>
        <input type="date" name="fecha" required />
      </div>
      <div className="casillaForm">
        <label>Hora</label>
        <input type="time" name="hora" required />
      </div>
      <div className="casillaForm">
        <label>Sintomas</label>
        <textarea name="sintomas" required></textarea>
      </div>
      <Boton sendText={"Agregar Cita"} type="submit" evento=""></Boton>
    </form>
  );
}

export default Formulario;
