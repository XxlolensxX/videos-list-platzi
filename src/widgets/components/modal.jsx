import React from 'react';
import './modal.css';

//icon
import Close from '../../icons/components/close.jsx';

const Modal = (props) => (
    <div className="Modal" >
        {props.children}
        <button 
        className="Modal__close"
        onClick={props.handleCloseModal}>
            <Close width={20} heigth={20} viewBox={20}/>
        </button>
    </div>
)

export default Modal;