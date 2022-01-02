//Se importan en este archivo los componentes de la APP para hacer una adecuada composición de componentes y no sufrir por pasar propiedades de padres hasta nietos.

import React, { Fragment, useState }  from 'react';
import PokemonTable from '../PokemonTable';
import PokemonRow from '../PokemonRow';
import PokemonSearch from '../PokemonSearch';
import Modal from '../Modal';
import MenuButton from '../MenuButton';
import Menu from '../Menu';
import PokemonCard from '../PokemonCard';
import './App.scss';

function App() {
    const [list, setList] = useState([])
    const [selected, setSelected] = useState()
    const [search, setSearch] = useState('')
    const [modal, setModal] = useState(false)
    let listOfPokemon = [];
    let searchedPokemons = [];

    // Función para conectar a la API
    const getData = async (id) =>{
        const API = 'https://pokeapi.co/api/v2/pokemon/' + id.toString();
        const response = await fetch(API);
        return (await response.json())
    }
    //Para obtener los 150 primeros pokemons con la función getData y regresarlos al estado que maneja la lista de pokemons
    const getPokemons = async () => {
        for (let i = 1; i <= 150; i++) {
            listOfPokemon.push(await getData(i));
        }
        await setList(listOfPokemon);
    }
    
    //Tomando el valor del input de busqueda, recupera su extención y filtra los pokemons
    if (!search.length >= 1) {
        searchedPokemons = list;
    } else {
        searchedPokemons = list.filter(pokemon => {
            const nameText = pokemon.name.toLowerCase();
            const searchText = search.toLowerCase();
            return nameText.includes(searchText);
        });
    }

    //Para hacer los llamados a la API solo la primera vez que se renderiza la página
    React.useEffect(() =>{
        getPokemons();
    }, [])

    return (
        <Fragment>
            <div className='head-container'>
                <h1 className='principal-title'>Pokedex</h1>
                <PokemonSearch 
                    searchValue={search}
                    setSearchValue={setSearch}
                />
            </div>
            <div>
                {!searchedPokemons.length
                    ? <p>No hay resultados que coincidan con tu busqueda!</p>
                    : <PokemonTable>
                        {searchedPokemons.map(pokemon => 
                                <PokemonRow 
                                id={pokemon.id} 
                                image={pokemon.sprites.front_default} 
                                pokemonName={pokemon.name} 
                                height={pokemon.height} 
                                weight={pokemon.weight}
                                setSelected={setSelected}
                                key={pokemon.id}
                                />
                        )}
                    </PokemonTable>
                }
                {!!modal && (
                    <Modal>
                        <Menu />
                    </Modal>
                )}
                <MenuButton 
                    left=''
                    setModal={setModal}
                    modal={modal}
                />
            </div>
            <div className='card-container'>
                <PokemonCard selected={selected} list={list}/>
            </div>
        </Fragment>
    )
}

export default App
