import React from 'react';
import { Link } from 'react-router';

const PokemonIndexItem = ({ poke }, key) => {
  return (
    <li key={key}>
      <Link to="/pokemon/:pokemonId">
        <img src={poke.image_url}/>
        {poke.name}
      </Link>
  </li>
  );
};

export default PokemonIndexItem;
