import React from 'react';
import { Link } from 'react-router-dom';

const Navegacion = () => {

    return (
        <div className="navegacion">
            <Link to="/"><button>Lista de Empleados</button></Link>
            <Link to="/crear-empleado"><button>Registrar Nuevo Empleado</button></Link>
        </div>
    );
};

export default Navegacion;