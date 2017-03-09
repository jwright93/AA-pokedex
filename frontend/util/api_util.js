export const fetchAllPokemon = () => (
  $.ajax({
    method: 'GET',
    url: 'api/pokemon'
  })
);

export const fetchSinglePokemon = (pokeId) => (
  $.ajax({
    method: 'GET',
    url: `api/pokemon/${pokeId}`
  })
);
