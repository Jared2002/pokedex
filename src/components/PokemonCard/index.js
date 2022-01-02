//Componente encargado de recuperar el id del pokemon clickeado y mostrar información en su card
import React, { Fragment } from 'react';
import './PokemonCard.scss';

function PokemonCard({ selected, list }) {
    const pokemon = list[selected - 1];
    //IMPORTANTE. Dentro del div.card-stats esta la lógica que en base al puntaje en las stats del pokemon determina el color en que se pintará
    return (
        <div className='card'>
            {!pokemon
                ? <p>Selecciona a un Pokemon</p>
                : <Fragment>
                    <img src={pokemon.sprites.front_default}/>
                    <h2>{pokemon.name}</h2>
                    <div className='card-stats'>
                        <p className={
                            pokemon.stats[0].base_stat > 0 && pokemon.stats[0].base_stat <=50
                                ? 'red'
                                : 'green'
                        }>{pokemon.stats[0].stat.name}: {pokemon.stats[0].base_stat}</p>
                        <p className={
                            pokemon.stats[1].base_stat > 0 && pokemon.stats[1].base_stat <=50
                                ? 'red'
                                : 'green'
                        }>{pokemon.stats[1].stat.name}: {pokemon.stats[1].base_stat}</p>
                        <p className={
                            pokemon.stats[2].base_stat > 0 && pokemon.stats[2].base_stat <=50
                                ? 'red'
                                : 'green'
                        }>{pokemon.stats[2].stat.name}: {pokemon.stats[2].base_stat}</p>
                    </div>
                    <div className='card-types'>
                        <span>Tipos</span>
                        {pokemon.types.map(type => 
                            <p key={type.type.name}>{type.type.name}</p>
                        )}
                    </div>
                </Fragment>
            }
        </div>
    )
}

export default PokemonCard
