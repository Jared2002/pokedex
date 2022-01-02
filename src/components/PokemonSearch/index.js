//Componente que renderiza la barra de busqueda
import React from 'react';
import './PokemonSearch.scss'

function PokemonSearch({ searchValue, setSearchValue }) {
    //Encargada de reconecer cada cambio dentro del input y guardarlo en el estado search
    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);
    };

    return (
        <input
            className="pokemonSearch"
            placeholder="Buscar Pokemon"
            value={searchValue}
            onChange={onSearchValueChange}
        /> 
    )
}

export default PokemonSearch
