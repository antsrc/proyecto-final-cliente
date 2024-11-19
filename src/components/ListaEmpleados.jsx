import React, { useState, useEffect } from 'react';
import Empleado from './Empleado';
import { obtenerEmpleados } from '../services/empleadosServices';
import { filtrarEmpleados } from '../services/empleadosServices';

const ListaEmpleados = () => {

    const [empleados, setEmpleados] = useState([]);

    useEffect(() => {
        setEmpleados(obtenerEmpleados());
    }, []);

    const handlerBuscar = (valor) => {
        if (valor == undefined || valor == null || valor.trim() == '') {
            setEmpleados(obtenerEmpleados());
        } else {
            setEmpleados(filtrarEmpleados(valor));
        }
    }

    return (
        <>
            <div className="buscador">
                <p>Buscar por nombre:</p>
                <input
                    type="text"
                    onChange={(e) => handlerBuscar(e.target.value)}
                />
            </div>
            <div className="contenedorTabla">
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nombre</th>
                            <th>Email</th>
                            <th>Dirección</th>
                            <th>Nº Afiliación</th>
                            <th>Antigüedad</th>
                            <th>Puesto</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    {empleados.length > 0 ? (
                        <tbody>
                            {empleados.map((empleado) => (
                                <tr key={empleado.id}>
                                    <Empleado empleado={empleado} />
                                </tr>
                            ))}
                        </tbody>
                    ) : (
                        <tbody></tbody>
                    )}
                </table>
            </div>
            {empleados.length === 0 && <p>No se han encontrado empleados</p>}
        </>
    );
};

export default ListaEmpleados;