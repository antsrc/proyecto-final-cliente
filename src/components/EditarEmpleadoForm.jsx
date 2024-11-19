import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { buscarEmpleado, modificarEmpleado } from '../services/empleadosServices';
import { obtenerEmpleados, guardarEmpleados } from '../services/empleadosServices';

const EditarEmpleadoForm = () => {

  const { id } = useParams();
  const [empleado, setEmpleado] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setEmpleado(buscarEmpleado(id));
  }, [id]);

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const addressRef = useRef();
  const afiliacionRef = useRef();
  const antiguedadRef = useRef();
  const jobRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const empleadoModificado = {
      id: id,
      first_name: firstNameRef.current.value,
      last_name: lastNameRef.current.value,
      email: emailRef.current.value,
      address: addressRef.current.value,
      nafiliacionss: afiliacionRef.current.value,
      antiguedad: antiguedadRef.current.value,
      job: jobRef.current.value
    };

    modificarEmpleado(empleadoModificado);

    alert(`El empleado ${id} ha sido modificado`);

    navigate('/');

  }

  if (!empleado) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="contenedorForm">
      <h1>Editando empleado con ID: {id}</h1>
      <form onSubmit={handleSubmit}>
      <div>
          <label>ID del empleado:</label>
          <input
            type="text"
            defaultValue={id}
            readOnly
          />
        </div>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            defaultValue={empleado.first_name}
            ref={firstNameRef}
          />
        </div>
        <div>
          <label>Apellido:</label>
          <input
            type="text"
            defaultValue={empleado.last_name}
            ref={lastNameRef}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            defaultValue={empleado.email}
            ref={emailRef}
          />
        </div>
        <div>
          <label>Dirección:</label>
          <input
            type="text"
            defaultValue={empleado.address}
            ref={addressRef}
          />
        </div>
        <div>
          <label>Número de afiliación:</label>
          <input
            type="text"
            defaultValue={empleado.nafiliacionss}
            ref={afiliacionRef}
          />
        </div>
        <div>
          <label>Año de antigüedad:</label>
          <input
            type="number"
            defaultValue={empleado.antiguedad}
            ref={antiguedadRef}
          />
        </div>
        <div>
          <label>Puesto:</label>
          <input
            type="text"
            defaultValue={empleado.job}
            ref={jobRef}
          />
        </div>
        <button type="submit">Guardar cambios</button>
      </form>
    </div>
  );
};

export default EditarEmpleadoForm;