//Componente encargado de "intercambiar" de páginas al pulsar el boton
import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.scss';

function Modal ({ children }) {
    return ReactDOM.createPortal(
        <div className='modalBackground'>
            {children}
        </div>,
        document.getElementById('modal'),
    )
}

export default Modal;
