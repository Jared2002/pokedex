import React from 'react';
import './PokemonSearch.scss'

function PokemonSearch({ searchValue, setSearchValue }) {
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
