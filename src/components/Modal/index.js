import ReactDOM from 'react-dom';
import './Modal.sass'

function Modal({ children }) {
    return ReactDOM.createPortal(
        <div className='modalBackground'>
            {children}
        </div>,
        document.getElementById('modal'),
    )
}

export default Modal
