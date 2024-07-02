import React from 'react';

export default function QuienesSomos() {
  const estiloParrafo = {
    color: '#fff',
    fontSize: '24px',
    textAlign: 'center',
    margin: '50px auto',
    maxWidth: '1200px'
  };

  return (
    <div>
      <h1>¿Quiénes Somos?</h1>
      <p style={estiloParrafo}>
        Los Goats
        <br/><br/>
        En nuestra clínica, nos dedicamos con pasión al cuidado y bienestar de tus mascotas. Contamos con un equipo de veterinarios altamente cualificados y comprometidos, cuyo principal objetivo es brindar atención médica de la más alta calidad y personalizada para cada uno de nuestros pacientes peludos.
        <br/><br/>
        En la Clínica Veterinaria Los Goats, entendemos que tus mascotas son mucho más que simples animales; son parte esencial de tu familia. Por eso, nos esmeramos en crear un ambiente acogedor y familiar donde tanto tú como tus queridas mascotas se sientan bienvenidos y cómodos.
        <br/><br/>
        Nos comprometemos a ser tu compañero de confianza en el viaje del cuidado de tus mascotas.
      </p>
    </div>
  );
}
