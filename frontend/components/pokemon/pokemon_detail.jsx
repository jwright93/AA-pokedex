import React from 'react';

class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.requestSinglePokemon(this.props.params.pokemonId);
  }

  render() {
    const pokemonId = this.props.params.pokemonId;

    return (
      <div>
        something
      </div>
    );
  }
}

export default PokemonDetail;
