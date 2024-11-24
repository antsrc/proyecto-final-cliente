import React, { useState } from "react";
import { anadirEmpleado } from "../services/empleadosServices";
import { useNavigate } from "react-router-dom";
import EmpleadoForm from "./EmpleadoForm";
import Modal from "./Modal";

// Componente con un formulario para crear un nuevo empleado
const CrearEmpleado = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [idCreada, setIdCreada] = useState(null);
  const navigate = useNavigate();

  // Manejo de los datos que ha recogido el componente EmpleadoForm
  const handleData = (datosEmpleado) => {
    const id = anadirEmpleado(datosEmpleado);
    setIdCreada(id);
    setIsOpen(true);
  };

  // Título del formulario
  const titulo = "Datos del nuevo empleado";

  // Devolvemos la vista
  return (
    <>
      <EmpleadoForm titulo={titulo} handleData={handleData} />
      <Modal
        isOpen={isOpen}
        mensaje={`Se ha registrado un nuevo empleado con ID ${idCreada}`}
        onConfirm={() => {
          setIdCreada(null);
          setIsOpen(false);
          navigate("/");
        }}
      />
    </>
  );
};

export default CrearEmpleado;