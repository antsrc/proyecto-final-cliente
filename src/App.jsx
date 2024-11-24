import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ListaEmpleados from './components/ListaEmpleados';
import EditarEmpleado from './components/EditarEmpleado';
import CrearEmpleado from './components/CrearEmpleado';
import './index.css';
import Navegacion from './components/Navegacion';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navegacion />
        <Routes>
          <Route path="/" element={<ListaEmpleados />} />
          <Route path="/crear-empleado" element={<CrearEmpleado />} />
          <Route path="/editar-empleado/:id" element={<EditarEmpleado />} />
        </Routes>
      </BrowserRouter>
    </>
  );

}

export default App;