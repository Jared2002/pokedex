//Componente encargado de renderizar la App dentro del div#root en el HTML
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(
    <App />
  ,document.getElementById('root')
);