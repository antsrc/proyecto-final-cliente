import React from 'react';
import { anadirEmpleado, buscarEmpleado, guardarEmpleados, obtenerEmpleados } from '../services/empleadosServices';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const CrearEmpleadoForm = () => {

  const navigate = useNavigate();

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const addressRef = useRef();
  const afiliacionRef = useRef();
  const antiguedadRef = useRef();
  const jobRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const nuevoEmpleado = {
      id: '',
      first_name: firstNameRef.current.value,
      last_name: lastNameRef.current.value,
      email: emailRef.current.value,
      address: addressRef.current.value,
      nafiliacionss: afiliacionRef.current.value,
      antiguedad: antiguedadRef.current.value,
      job: jobRef.current.value
    };

    const id = anadirEmpleado(nuevoEmpleado);

    alert(`Se ha registrado un nuevo empleado con ID ${id}`);

    navigate('/');
  }

  return (
    <div className="contenedorForm">
      <h1>Datos del nuevo empleado</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            ref={firstNameRef}
            required
          />
        </div>
        <div>
          <label>Apellido:</label>
          <input
            type="text"
            ref={lastNameRef}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            ref={emailRef}
            required
          />
        </div>
        <div>
          <label>Dirección:</label>
          <input
            type="text"
            ref={addressRef}
            required
          />
        </div>
        <div>
          <label>Número de afiliación:</label>
          <input
            type="text"
            ref={afiliacionRef}
            required
          />
        </div>
        <div>
          <label>Año de antigüedad:</label>
          <input
            type="number"
            ref={antiguedadRef}
            required
          />
        </div>
        <div>
          <label>Puesto:</label>
          <input
            type="text"
            ref={jobRef}
            required
          />
        </div>
        <button type="submit">Guardar cambios</button>
      </form>
    </div>
  );
};

export default CrearEmpleadoForm;