import React from 'react'
import './Menu.sass'

function Menu() {
    return (
        <div className='menu-container'>
            <h1 className='menu-header'>Pokedex</h1>
            <span className='menu-name'>Hecha por Jared Romero</span>
            <p>Este un pequeño ejemplo de uso de la API de PokeAPI, la cual puedes ver a través del siguiente <a className='menu-link' href='https://pokeapi.co/' target='_blank' rel='noreferrer'>enlace</a>.</p>
            <p><b>Muchas gracias por tomarme en cosideración para su postulación</b></p>
            <img className='menu-image' src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png' alt='Hola, que tenga un buen día'></img>
        </div>
    )
}

export default Menu
