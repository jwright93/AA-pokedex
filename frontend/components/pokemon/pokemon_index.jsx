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
      <ol className="sidebar">
        {this.props.pokemon.map((pokemon, i) => {
          return <li key={i}>
            <img src={pokemon.image_url}/>
            {pokemon.name}
          </li>;
        })}
      </ol>
    );
  }
}

export default PokemonIndex;
