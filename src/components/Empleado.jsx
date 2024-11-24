import React from "react";

// Componente que devuelve una fila de tabla con los datos
// de un empleado y dos botones, para editarlo o eliminarlo
const Empleado = ({ empleado, handleEditar, handleEliminar }) => {
  const {
    id,
    first_name,
    last_name,
    email,
    address,
    nafiliacionss,
    antiguedad,
    job,
  } = empleado;

  // Devolvemos la fila
  return (
    <>
      <tr>
        <td>{id}</td>
        <td>
          {first_name} {last_name}
        </td>
        <td>{email}</td>
        <td>{address}</td>
        <td>{nafiliacionss}</td>
        <td>{antiguedad}</td>
        <td>{job}</td>
        <td>
          <div className="botones">
            <button onClick={() => handleEditar(id)}>Editar</button>
            <button onClick={() => handleEliminar(id)}>Eliminar</button>
          </div>
        </td>
      </tr>
    </>
  );
};

export default Empleado;
