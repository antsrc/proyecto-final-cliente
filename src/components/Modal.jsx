import React, { useEffect } from "react";

// Componente que devuelve un modal
const Modal = ({ isOpen, mensaje, onConfirm, onClose }) => {

  // Me he visto forzado a bloquear el uso del teclado mientras
  // el modal está abierto, para solucionar ciertos problemas
  useEffect(() => {
    if (isOpen) {
      const handleKeyDown = (e) => {
        e.preventDefault();
        e.stopPropagation();
      };
      window.addEventListener("keydown", handleKeyDown, true);
      return () => {
        window.removeEventListener("keydown", handleKeyDown, true);
      };
    }
  }, [isOpen]);

  // Si el modal está cerrado, no devolvemos nada
  if (!isOpen) {
    return null;
  }

  // Si el modal está abierto, lo devolvemos
  return (
    <div className="fondo-modal">
      <div className="modal">
        <p>{mensaje}</p>
        <div className="botones">
          <button onClick={onConfirm}>Confirmar</button>
          {onClose && <button onClick={onClose}>Cancelar</button>}
        </div>
      </div>
    </div>
  );
};

export default Modal;
