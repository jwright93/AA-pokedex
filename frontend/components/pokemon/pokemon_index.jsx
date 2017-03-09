import React from 'react';

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.requestAllPokemon();
  }
  render() {
    return (
      <ul>
        {this.props.pokemon.map((pokemon, i) => {
          return <li key={i}>{pokemon.name} {pokemon.image}</li>;
        })}
      </ul>
    );
  }
}

export default PokemonIndex;
