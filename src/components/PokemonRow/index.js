//Componente que utiliza los 150 llamados a la API y renderiza una fila de la tabla por cada llamado
import React from 'react';

function PokemonRow({ id, image, pokemonName, height, weight, setSelected }) {
    return (
        <tr onClick={()=>{
            setSelected(id)
        }}>
            <td><p>{id}</p></td>
            <td>
                <div>
                    <img src={image} alt={pokemonName} />
                </div>
                <p>{pokemonName}</p>
            </td>
            <td><p>{height}</p></td>
            <td><p>{weight}</p></td>
        </tr>
    )
}

export default PokemonRow
