import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ListaEmpleados from './components/ListaEmpleados';
import EditarEmpleadoForm from './components/EditarEmpleadoForm';
import CrearEmpleadoForm from './components/CrearEmpleadoForm';
import './index.css';
import Navegacion from './components/Navegacion';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navegacion />
        <Routes>
          <Route path="/" element={<ListaEmpleados />} />
          <Route path="/crear-empleado" element={<CrearEmpleadoForm />} />
          <Route path="/editar-empleado/:id" element={<EditarEmpleadoForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );

}

export default App;