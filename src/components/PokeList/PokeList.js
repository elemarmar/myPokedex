import React from 'react';

import Pokemon from '../Pokemon/Pokemon';
import './PokeList.css'

const PokeList = (props) => {


    let transformedPokemons = props.pokeData.map(pokemon => {
        return <Pokemon 
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            types={pokemon.types}
            picURL={pokemon.url} />
    });

    return (
        <div className="pokelist">
            {transformedPokemons}     
        </div>)
}

export default PokeList;