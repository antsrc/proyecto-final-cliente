import React, { useRef } from "react";

// Componente que devuelve un formulario, para ser reutilizado al crear o editar un empleado
const EmpleadoForm = ({ titulo, defaultValues = {}, handleData }) => {
  // Referencias a los campos del formulario
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const addressRef = useRef();
  const afiliacionRef = useRef();
  const antiguedadRef = useRef();
  const jobRef = useRef();

  // Creamos un objeto con los datos del empleado para que la clase padre lo gestione
  const handleSubmit = (e) => {
    e.preventDefault();

    const datosEmpleado = {
      first_name: firstNameRef.current.value,
      last_name: lastNameRef.current.value,
      email: emailRef.current.value,
      address: addressRef.current.value,
      nafiliacionss: afiliacionRef.current.value,
      antiguedad: antiguedadRef.current.value,
      job: jobRef.current.value,
    };

    handleData(datosEmpleado);
  };

  // Variables para validar la fecha de antiguedad
  const maxAntiguedad = new Date().getFullYear();
  const minAntiguedad = maxAntiguedad - 49;

  // Devolvemos el formulario
  return (
    <div className="contenedorForm">
      <h1>{titulo}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            ref={firstNameRef}
            defaultValue={defaultValues.first_name || ""}
            required
          />
        </div>
        <div>
          <label>Apellido:</label>
          <input
            type="text"
            ref={lastNameRef}
            defaultValue={defaultValues.last_name || ""}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            ref={emailRef}
            defaultValue={defaultValues.email || ""}
            required
          />
        </div>
        <div>
          <label>Dirección:</label>
          <input
            type="text"
            ref={addressRef}
            defaultValue={defaultValues.address || ""}
            required
          />
        </div>
        <div>
          <label>Número de afiliación:</label>
          <input
            type="number"
            ref={afiliacionRef}
            defaultValue={defaultValues.nafiliacionss || ""}
            required
          />
        </div>
        <div>
          <label>Año de antigüedad:</label>
          <input
            type="number"
            ref={antiguedadRef}
            defaultValue={defaultValues.antiguedad || ""}
            required
            min={minAntiguedad}
            max={maxAntiguedad}
          />
        </div>
        <div>
          <label>Puesto:</label>
          <input
            type="text"
            ref={jobRef}
            defaultValue={defaultValues.job || ""}
            required
          />
        </div>
        <button type="submit">Guardar cambios</button>
      </form>
    </div>
  );
};

export default EmpleadoForm;
