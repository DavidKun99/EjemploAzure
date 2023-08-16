import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './SearchBar.module.css';
import { useSelector } from 'react-redux';

const SearchBar = () => {
  const pokemons = useSelector((state) => state.pokemons);
  const [filter, setFilter] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  const filteredPokemons = pokemons.filter(
    (pokemon) => pokemon.name.toLowerCase() === filter.toLowerCase()
  );

  const handleTitleClick = () => {
    setFilter('');
    setShowDropdown(false);
  };

  const handleSearchInputChange = (event) => {
    const query = event.target.value;
    setFilter(query);
    setShowDropdown(true);
  };
  
  const handleImageError = (event) => {
    event.target.src = "/createPokemon.png";
  };

  return (
    <div className={style.search}>
      <input
        className={style.input}
        type="text"
        value={filter}
        onChange={handleSearchInputChange}
        placeholder="Which pokemon are you looking for?"
        onClick={() => setShowDropdown(true)}
      />
      {showDropdown && filter.length > 0 && (
        <div className={style.searchResults}>
          {filteredPokemons.length > 0 ? (
            filteredPokemons.map((pokemon) => (
              <Link
                to={`/detail/${pokemon.id_Pokemon}`}
                key={pokemon.name}
                className={style.resultItem}
                onClick={handleTitleClick}
              >
                <div className={style.resultItemContent}>
                  <img
                    src={pokemon.image}
                    alt={pokemon.name}
                    className={style.resultItemImage}
                    onError={handleImageError}
                  />
                  <span>{pokemon.name.toUpperCase()}</span>
                </div>
              </Link>
            ))
          ) : (
            <p className={style.noResults}>No pokemons found</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
