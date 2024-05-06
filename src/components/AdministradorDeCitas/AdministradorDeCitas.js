import Card from '../Card/Card';
import Subtitulo from '../Subtitulo/Subtitulo';
function AdministradorDeCitas() {
  return (
        <div>
            <Subtitulo subtitulo={"Administra tus citas"}></Subtitulo>
            <div class="cards">
                <Card mascota="Milton"  dueño="Casco" fecha="28/4/2024" hora="22:00" sintomas="No está comiendo"></Card>
                <Card mascota="Valentin"  dueño="Barco" fecha="20/3/2024" hora="18:00" sintomas="Le duele la panza"></Card>
                <Card mascota="Facundo"  dueño="Matias" fecha="01/12/2024" hora="10:00" sintomas="Le duele la pierna"></Card>
            </div>
        </div>
    );
}

export default AdministradorDeCitas;
