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
          return <li key={i}>{pokemon.name}
            <img src={pokemon.image_url}/>
          </li>;
        })}
      </ul>
    );
  }
}

export default PokemonIndex;
