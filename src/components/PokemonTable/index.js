import React from 'react'

function PokemonTable(props) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Pokemon</th>
                    <th>Height</th>
                    <th>Weigth</th>
                </tr>
            </thead>
            <tbody>
                {props.children}
            </tbody>
        </table>
    )
}

export default PokemonTable
