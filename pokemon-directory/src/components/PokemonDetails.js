import React from 'react';

const PokemonDetails = ({ name, height, weight, abilities, onGalleryOpen }) => {
  return (
    <div className="pokemon-details">
      <h2>{name}</h2>
      <p>Height: {height / 10} m</p>
      <p>Weight: {weight / 10} kg</p>
      <h3>Abilities:</h3>
      <ul>
        {abilities.map((ability) => (
          <li key={ability.ability.name}>{ability.ability.name}</li>
        ))}
      </ul>
      <button onClick={onGalleryOpen}>View Images</button>
    </div>
  );
};

export default PokemonDetails;
