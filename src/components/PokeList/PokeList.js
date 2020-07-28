import React from 'react';
import Pokemon from '../Pokemon/Pokemon';

const PokeList = (props) => {

    let transformedPokemons = props.pokeData.map(pokemon => {
        return <Pokemon 
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            types={pokemon.types}
            picURL={pokemon.url} />
    });

    console.log(transformedPokemons);

    return (transformedPokemons)
}

export default PokeList;