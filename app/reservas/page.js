"use client";
import { useEffect, useState } from "react";
import Lista from "../components/listas/Lista";
import Formulario from "../components/formulario/Formulario";
import Header from "../components/Header/Header";
import "./Reserva.css";

function Reserva() {
  const localCitas = localStorage.getItem("citas");
  
  const [citas, setCitas] = useState(localCitas ? JSON.parse(localCitas) : []);

  // Función para agregar una nueva cita al listado
  const agregarCita = (nuevaCita) => {
    // Validar datos de la cita (Plus 3)

    // Mostrar confirm antes de agregar la cita (Plus 2)
    if (window.confirm("¿Estás seguro de agregar esta cita?")) {
      setCitas([...citas, nuevaCita]);
    }
  };

  // Función para eliminar una cita del listado
  const eliminarCita = (indice) => {
    // Mostrar confirm antes de eliminar la cita (Plus)
    if (window.confirm("¿Estás seguro de eliminar esta cita?")) {
      const nuevasCitas = [...citas];
      nuevasCitas.splice(indice, 1);
      setCitas(nuevasCitas);
    }
  };  

  useEffect(() => { 
    localStorage.setItem("citas", JSON.stringify(citas));
  }, [citas]);  

  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="column">
            <div className="form-container">
              <h2>Crear mi Cita</h2>
              <Formulario agregarCita={agregarCita} /> {/* Pasar función como prop */}
            </div>
          </div>
          <div className="column">
            <h2>Administra tus citas</h2>
            <Lista citas={citas} eliminarCita={eliminarCita} /> {/* Pasar citas y función eliminarCita como props */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Reserva;
