// Componente que renderiza el button flotante
import React from 'react';
import './MenuButton.scss'

function MenuButton(props) {
  //Recibiendo el estado del boton, se determina si con cada click se abrirĂ¡ o cerrarĂ¡
  const onClickButton = () => {
    !!props.modal 
      ? props.setModal(false)
      : props.setModal(true)
  };
  
  return (
    <button
      onClick={() => onClickButton()}
    >
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
        width="48" height="48"
        viewBox="0 0 24 24"
        className='icon'
        fill='#FFF'>
        <path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z"></path>
      </svg>
    </button>
  );
}

export default MenuButton