import Card from '../Card/Card';
import Subtitulo from '../Subtitulo/Subtitulo';
import './AdministradorDeCitas.css';

function AdministradorDeCitas() {
  return (
        <div>
            <Subtitulo subtitulo={"Administra tus citas"}></Subtitulo>
            <div class="cards">
                <Card mascota="Milton"  duenio="Casco" fecha="28/4/2024" hora="22:00" sintomas="No está comiendo"></Card>
                <Card mascota="Valentin"  duenio="Barco" fecha="20/3/2024" hora="18:00" sintomas="Le duele la panza"></Card>
            </div>
        </div>
    );
}

export default AdministradorDeCitas;
