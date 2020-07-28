import React, { Component } from 'react';

import PokeList from '../components/PokeList/PokeList'
import pokemonData from '../assets/api/pokemons.json';
import './App.css';


class App extends Component {
  // utilizo última sintaxis, sin necesidad de llamar al constructor (lo hace por detrás)
  state = {
    pokemons: pokemonData
  }

  render() {
    console.log(this.state.pokemons);
    return (
      <div className="App">
        <PokeList pokeData={this.state.pokemons}/>
      </div>
    );
  }

}

export default App;
