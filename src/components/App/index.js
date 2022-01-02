import React, { useState }  from 'react';
import PokemonTable from '../PokemonTable';
import PokemonRow from '../PokemonRow';
import PokemonSearch from '../PokemonSearch';
import Modal from '../Modal';
import MenuButton from '../MenuButton';
import Menu from '../Menu';
import './App.scss';

function App() {
    const [list, setList] = useState([])
    const [search, setSearch] = useState('')
    const [modal, setModal] = useState(false)
    let listOfPokemon = [];
    let searchedPokemons = [];

    const getData = async (id) =>{
        const API = 'https://pokeapi.co/api/v2/pokemon/' + id.toString();
        const response = await fetch(API);
        return (await response.json())
    }
    const getPokemons = async () => {
        for (let i = 1; i <= 150; i++) {
            listOfPokemon.push(await getData(i));
        }
        await setList(listOfPokemon);
    }
    
    if (!search.length >= 1) {
        searchedPokemons = list;
    } else {
        searchedPokemons = list.filter(pokemon => {
            const nameText = pokemon.name.toLowerCase();
            const searchText = search.toLowerCase();
            return nameText.includes(searchText);
        });
    }

    React.useEffect(() =>{
        getPokemons();
    }, [])

    return (
        <div>
            <h1 className='principal-title'>Pokedex</h1>
            <PokemonSearch 
                searchValue={search}
                setSearchValue={setSearch}
            />
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
                setModal={setModal}
                modal={modal}
            />
        </div>
    )
}

export default App
