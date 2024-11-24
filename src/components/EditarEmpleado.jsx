import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  buscarEmpleado,
  modificarEmpleado,
} from "../services/empleadosServices";
import EmpleadoForm from "./EmpleadoForm";
import Modal from "./Modal";

// Componente con un formulario para editar los datos de un empleado existente
const EditarEmpleado = () => {
  const { id } = useParams();
  const [empleado, setEmpleado] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // Actualizaremos los datos del formulario para cada cambio en la id
  useEffect(() => {
    setEmpleado(buscarEmpleado(id));
  }, [id]);

  // Si no se encuentra al empleado, se devuelve un aviso
  if (!empleado) {
    return <div className="aviso">El empleado con ID {id} no existe</div>;
  }

  // Manejo de los datos que ha recogido el componente EmpleadoForm
  const handleData = (datosEmpleado) => {
    const empleado = { id, ...datosEmpleado };
    modificarEmpleado(empleado);
    setIsOpen(true);
  };

  // Título del formulario
  const titulo = `Datos del empleado ${id}`;

  // Devolvemos la vista
  return (
    <>
      <EmpleadoForm
        titulo={titulo}
        defaultValues={empleado}
        handleData={handleData}
      />
      <Modal
        isOpen={isOpen}
        mensaje={`El empleado ${empleado.id} ha sido modificado`}
        onConfirm={() => {
          setIsOpen(false);
          navigate("/");
        }}
      />
    </>
  );
};

export default EditarEmpleado;
