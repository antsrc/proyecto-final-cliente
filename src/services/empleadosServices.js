import { empleados } from '../data/empleados';

export const obtenerEmpleados = () => {
    const empleadosLocal = localStorage.getItem('empleados');
    return empleadosLocal ? JSON.parse(empleadosLocal) : empleados;
};

export const guardarEmpleados = (empleados) => {
    localStorage.setItem('empleados', JSON.stringify(empleados));
}

export const buscarEmpleado = (id) => obtenerEmpleados().find(e => e.id == id);

export const filtrarEmpleados = (busqueda) => obtenerEmpleados().filter(e => `${e.first_name} ${e.last_name}`.toLowerCase().includes(busqueda.toLowerCase()));

export const anadirEmpleado = (nuevoEmpleado) => {
    const empleados = obtenerEmpleados();
    const id = Number(empleados[empleados.length - 1].id) + 1;
    nuevoEmpleado.id = id;
    empleados.push(nuevoEmpleado);
    guardarEmpleados(empleados);
    return id;
}

export const modificarEmpleado = (empleadoModificado) => {
    const empleados = obtenerEmpleados();
    const index = empleados.findIndex(e => e.id == empleadoModificado.id);
    empleados[index] = empleadoModificado;
    guardarEmpleados(empleados);
}

export const eliminarEmpleado = (id) => {
    const empleados = obtenerEmpleados();
    const index = empleados.findIndex(e => e.id == id);
    empleados.splice(index, 1);
    guardarEmpleados(empleados);
}