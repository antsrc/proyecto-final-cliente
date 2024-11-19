import React from 'react';
import { useNavigate } from 'react-router-dom';
import { eliminarEmpleado } from '../services/empleadosServices';

const Empleado = ({ empleado }) => {

  const { id, first_name, last_name, email, address, nafiliacionss, antiguedad, job } = empleado;

  const navigate = useNavigate();

  const handleEditar = () => {
    navigate(`/editar-empleado/${id}`);
  };

  const handleEliminar = () => {
    if (confirm(`¿Seguro que quieres eliminar al empleado ${id}?`)) {
      eliminarEmpleado(id);
      alert(`El empleado ${id} ha sido eliminado`);
      navigate(0);
    }
  };

  return (
    <>
      <td>{id}</td>
      <td>{first_name} {last_name}</td>
      <td>{email}</td>
      <td>{address}</td>
      <td>{nafiliacionss}</td>
      <td>{antiguedad}</td>
      <td>{job}</td>
      <td>
          <button onClick={handleEditar}>Editar</button>
          <button onClick={handleEliminar}>Eliminar</button>
      </td>
    </>
  );
};

export default Empleado;