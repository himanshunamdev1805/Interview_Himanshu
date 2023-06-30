import React, { useState, useEffect } from 'react';
import PokemonCard from './components/PokemonCard';
import PokemonPagination from './components/PokemonPagination';
import PokemonDetails from './components/PokemonDetails';
import PokemonGallery from './components/PokemonGallery';
import './App.css';

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [galleryIsOpen, setGalleryIsOpen] = useState(false);

  useEffect(() => {
    fetchPokemonList();
  }, []);

  const fetchPokemonList = async () => {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150');
      const data = await response.json();
      setPokemonList(data.results);
    } catch (error) {
      console.error('Error fetching Pokemon list:', error);
    }
  };

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
    setSelectedPokemon(null);
  };

  const handlePokemonCardClick = async (pokemonUrl) => {
    try {
      const response = await fetch(pokemonUrl);
      const data = await response.json();
      setSelectedPokemon(data);
    } catch (error) {
      console.error('Error fetching Pokemon details:', error);
    }
  };

  const handleGalleryOpen = () => {
    setGalleryIsOpen(true);
  };

  const handleGalleryClose = () => {
    setGalleryIsOpen(false);
  };

  const renderPokemonCards = () => {
    const startIndex = currentPage * 10;
    const endIndex = startIndex + 10;
    const pokemonCards = pokemonList.slice(startIndex, endIndex).map((pokemon) => (
      <PokemonCard
        key={pokemon.name}
        name={pokemon.name}
        imageUrl={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.url.split('/')[6]}.png`}
        onClick={() => handlePokemonCardClick(pokemon.url)}
      />
    ));
    return pokemonCards;
  };

  const renderPokemonDetails = () => {
    if (!selectedPokemon) return null;
    const { name, height, weight, abilities } = selectedPokemon;
    return (
      <PokemonDetails
        name={name}
        height={height}
        weight={weight}
        abilities={abilities}
        onGalleryOpen={handleGalleryOpen}
      />
    );
  };

  const renderPokemonGallery = () => {
    if (!selectedPokemon) return null;
    const { sprites } = selectedPokemon;
    const images = sprites
      ? [
          { original: sprites.front_default, thumbnail: sprites.front_default },
          { original: sprites.back_default, thumbnail: sprites.back_default },
        ]
      : [];
    return (
      <PokemonGallery isOpen={galleryIsOpen} images={images} onClose={handleGalleryClose} />
    );
  };

  return (
    <div className="App">
      <h1>Pokemon Directory</h1>
      <div className="pokemon-grid">{renderPokemonCards()}</div>
      <PokemonPagination
        pageCount={Math.ceil(pokemonList.length / 10)}
        onPageChange={handlePageChange}
      />
      {renderPokemonDetails()}
      {renderPokemonGallery()}
    </div>
  );
}

export default App;
