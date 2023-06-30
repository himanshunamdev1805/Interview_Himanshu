import React from 'react';

const PokemonCard = ({ name, imageUrl, onClick }) => {
  return (
    <div className="pokemon-card" onClick={onClick}>
      <img src={imageUrl} alt={name} />
      <p>{name}</p>
    </div>
  );
};

export default PokemonCard;
