import React from 'react';

class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.requestSinglePokemon(this.props.params.pokemonId);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.params.pokemonId !== newProps.params.pokemonId) {
      this.props.requestSinglePokemon(newProps.params.pokemonId);
    }
  }

  render() {
    const pokemonId = this.props.params.pokemonId;
    return (
      <div>
        {this.props.pokemonDetail.name}
        <br/>
      </div>
    );
  }
}

export default PokemonDetail;
