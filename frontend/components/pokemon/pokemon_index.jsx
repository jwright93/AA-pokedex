import React from 'react';
import PokemonIndexItem from './pokemon_index_item';

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.requestAllPokemon();
  }

  render() {


    const pokemonItems = this.props.pokemon.map( (poke) => (
      <PokemonIndexItem key={poke.id} poke={poke} />
    ));

    return (
      <div>
        <ol className="sidebar">
          {pokemonItems}
        </ol>
        {this.props.children}
      </div>
    );
  }
}

export default PokemonIndex;
