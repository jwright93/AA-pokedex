import { values } from 'lodash';

const selectAllPokemon = (state) => {
  return values(state);
};

export default selectAllPokemon;
