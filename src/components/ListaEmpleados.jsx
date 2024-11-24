import React, { useState, useEffect } from "react";
import Empleado from "./Empleado";
import Modal from "./Modal";
import {
  filtrarEmpleados,
  obtenerEmpleados,
  ordenarEmpleados,
  guardarEmpleados,
} from "../services/empleadosServices";
import { useNavigate } from "react-router-dom";

// Componente que devuelve la lista de empleados
const ListaEmpleados = () => {
  const [empleadosData, setEmpleadosData] = useState([]);
  const [valorBusqueda, setValorBusqueda] = useState("");
  const [criterioOrden, setCriterioOrden] = useState("id");
  const [empleadosVista, setEmpleadosVista] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [idAEliminar, setIdAEliminar] = useState(null);
  const navigate = useNavigate();

  // Al montar la ruta, obtenemos el array del servicio en el estado de datos
  useEffect(() => {
    setEmpleadosData(obtenerEmpleados());
  }, []);

  // Al obtener el array del servicio, lo ordenamos, por defecto por id,
  // y lo establecemos en el estado de la vista
  useEffect(() => {
    filtrarYOrdenarEmpleados(valorBusqueda, criterioOrden);
  }, [empleadosData]);

  // Esta función nos permite reutilizar la lógica para filtrar y ordenar los datos en la vista
  // Intenté utilizar un UseEffect, pero la renderización no se sincronizaba correctamente
  const filtrarYOrdenarEmpleados = (valor, criterio) => {
    const empleadosFiltrados = valor.trim()
      ? filtrarEmpleados(empleadosData, valor)
      : empleadosData;
    setEmpleadosVista(ordenarEmpleados(empleadosFiltrados, criterio));
  };

  // Manejo de la barra de búsqueda
  const handlerBuscar = (valor) => {
    setValorBusqueda(valor);
    filtrarYOrdenarEmpleados(valor, criterioOrden);
  };

  // Manejo del click en una columna para ordenar
  const handleOrdenar = (columna) => {
    setCriterioOrden(columna);
    filtrarYOrdenarEmpleados(valorBusqueda, columna);
  };

  // Manejo del botón de editar un empleado
  const handleEditar = (id) => {
    navigate(`/editar-empleado/${id}`);
  };

    // Manejo del botón de eliminar un empleado
  const handleEliminar = (id) => {
    setIdAEliminar(id);
    setIsOpen(true);
  };

  // Manejo de la confirmación de eliminar a un empleado en el modal
  const confirmarEliminacion = () => {
    const nuevaLista = empleadosData.filter(
      (empleado) => empleado.id !== idAEliminar
    );
    guardarEmpleados(nuevaLista);
    setIdAEliminar(null);
    setIsOpen(false);
    setEmpleadosData(nuevaLista);
  };

  // Devolvemos la vista con la lista y las opciones
  return (
    <>
      <div className="buscador">
        <p>Buscar por nombre:</p>
        <input type="text" onChange={(e) => handlerBuscar(e.target.value)} />
      </div>
      {empleadosVista.length === 0 ? (
        <div className="aviso">No se encontraron empleados</div>
      ) : (
        <div className="contenedorTabla">
          <table>
            <thead>
              <tr>
                <th onClick={() => handleOrdenar("id")}>ID</th>
                <th onClick={() => handleOrdenar("first_name")}>Nombre</th>
                <th onClick={() => handleOrdenar("email")}>Email</th>
                <th onClick={() => handleOrdenar("address")}>Dirección</th>
                <th onClick={() => handleOrdenar("nafiliacionss")}>
                  Nº Afiliación
                </th>
                <th onClick={() => handleOrdenar("antiguedad")}>Antigüedad</th>
                <th onClick={() => handleOrdenar("job")}>Puesto</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {empleadosVista.map((empleado) => (
                <Empleado
                  key={empleado.id}
                  empleado={empleado}
                  handleEditar={handleEditar}
                  handleEliminar={handleEliminar}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
      <Modal
        isOpen={isOpen}
        mensaje={`¿Seguro que quieres eliminar al empleado ${idAEliminar}?`}
        onConfirm={confirmarEliminacion}
        onClose={() => {
          setIdAEliminar(null);
          setIsOpen(false);
        }}
      />
    </>
  );
};

export default ListaEmpleados;
