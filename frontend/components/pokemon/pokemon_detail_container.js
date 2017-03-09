import { connect } from 'react-redux';
import { requestSinglePokemon } from '../../actions/pokemon_actions';
import PokemonDetail from './pokemon_detail';

// QUESTION: Why do we need this both here and in the root reducer?
const mapStateToProps = state => ({
  pokemonDetail: state.pokemonDetail
});

const mapDispatchToProps = dispatch => ({
  requestSinglePokemon: (pokemonId) => dispatch(requestSinglePokemon(pokemonId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);
