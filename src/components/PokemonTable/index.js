import React from 'react'
import './PokemonTable.scss'

function PokemonTable(props) {
    return (
        <table>
            <thead>
                <tr>
                    <th><p>Id</p></th>
                    <th><p>Pokemon</p></th>
                    <th><p>Height</p></th>
                    <th><p>Weigth</p></th>
                </tr>
            </thead>
            <tbody>
                {props.children}
            </tbody>
        </table>
    )
}

export default PokemonTable
