import React from 'react';
import { Link } from 'react-router';

const PokemonIndexItem = ({ poke }) => {
  return (
    <li>
      <Link to={`/pokemon/${poke.id}`}>
        <img src={poke.image_url}/>
        {poke.name}
      </Link>
  </li>
  );
};

export default PokemonIndexItem;
