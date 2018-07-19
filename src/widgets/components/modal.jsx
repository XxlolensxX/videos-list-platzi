import React from 'react';
import './modal.css';

const Modal = (props) => (
    <div className="Modal" >
        Modal
        {props.children}
        <button onClick={props.handleCloseModal}>cerrar</button>
    </div>
)

export default Modal;