import React from 'react'

function PokemonRow({ id, image, pokemonName, height, weight }) {
    return (
        <tr>
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
