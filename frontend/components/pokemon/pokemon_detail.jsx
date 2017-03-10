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

  // TODO: Join moves with commas
  render() {
    const poke = this.props.pokemonDetail;

    return (
      <div className="pokemonDetails">
        <ul>
          <li>
            <img src={poke.image_url} />
          </li>
          <li>{poke.name}</li>
          <li>Type: {poke.poke_type}</li>
          <li>Attack: {poke.attack}</li>
          <li>Defense: {poke.defense}</li>
          <li>Moves: {poke.moves}</li>
        </ul>
        <br/>
      </div>
    );
  }
}

export default PokemonDetail;
