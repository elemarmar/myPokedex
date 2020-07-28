import React from 'react';
import './Pokemon.css';


const Pokemon = (props) => {

    // dynamic types
    const pokeTypes = props.types.map(type => {
        return <li key={type}>{type}</li>
    })

    return (
        <div className="pokemon-card">
            <h3 className="poke-name">{props.name}</h3>
            <span className="poke-id">{props.id}</span>
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

export default Pokemon;