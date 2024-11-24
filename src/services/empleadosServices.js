import { empleados } from "../data/empleados";

// Función para obtener los empleados, del localStorage si existe, del fichero empleados.js si no
// Cuando no existe el localStorage, guardaremos la última id como referencia para generar nuevas
export const obtenerEmpleados = () => {
  const empleadosLocal = localStorage.getItem("empleados");
  if (empleadosLocal) {
    return JSON.parse(empleadosLocal);
  }
  localStorage.setItem(
    "idcont",
    JSON.stringify(empleados[empleados.length - 1].id)
  );
  return empleados;
};

// Función que nos permite ordenar un array de empleados bajo un criterio
export const ordenarEmpleados = (empleados, criterio) => {
  const empleadosOrdenados = empleados.sort((a, b) => {
    if (a[criterio] < b[criterio]) return -1;
    if (a[criterio] > b[criterio]) return 1;
    return 0;
  });
  return empleadosOrdenados;
};

// Función para guardar un array (modificación del original) en el localStorage
export const guardarEmpleados = (empleados) => {
  localStorage.setItem("empleados", JSON.stringify(empleados));
};

// Función que genera una ID única, evitando reutilizar la de empleados borrados
const obtenerNuevaId = () => {
  const nuevaId = Number(localStorage.getItem("idcont")) + 1;
  localStorage.setItem("idcont", nuevaId);
  return nuevaId;
};

// Función que localiza y devuelve a un empleado
export const buscarEmpleado = (id) =>
  obtenerEmpleados().find((e) => e.id == id);

// Función que nos permite filtrar un array por nombre completo
export const filtrarEmpleados = (empleados, busqueda) =>
  empleados.filter((e) =>
    `${e.first_name} ${e.last_name}`
      .toLowerCase()
      .includes(busqueda.toLowerCase())
  );

  // Función que nos permite añadir un empleado
export const anadirEmpleado = (datosEmpleado) => {
  const empleados = obtenerEmpleados();
  const id = obtenerNuevaId();
  const nuevoEmpleado = { id, ...datosEmpleado };
  empleados.push(nuevoEmpleado);
  guardarEmpleados(empleados);
  return id;
};

 // Función que nos permite modificar un empleado
export const modificarEmpleado = (empleadoModificado) => {
  const empleados = obtenerEmpleados();
  const index = empleados.findIndex((e) => e.id == empleadoModificado.id);
  empleados[index] = empleadoModificado;
  guardarEmpleados(empleados);
};
