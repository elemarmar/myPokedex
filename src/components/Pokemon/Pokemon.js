import React from 'react';


const Pokemon = (props) => {

    // dynamic types
    let pokeTypes = props.types.map(type => {
        return <li key={type}>{type}</li>
    })

    return (
        <div className="pokemon-card">
            <h3>{props.name}</h3>
            <span>{props.id}</span>
            <div className="pokemon-body">
                <ul className="pokemon-types">
                    {pokeTypes}
                </ul>
                <div className="pokemon-img-container">
                    <img className="pokemon-img" src={props.picURL} alt="Pokemon name" />
                </div>
            </div>
        </div>
        )
}



// types={pokemon.types}



export default Pokemon;