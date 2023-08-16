import React, { useState } from 'react';
import styles from './FilterComponent.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { orderPokemons, filterPokemons } from '../../redux/actions';

const FilterComponent = () => {
  const pokemonTypes = useSelector((state) => state.pokemonTypes);
  const dispatch = useDispatch();
  const [currentFilters, setCurrentFilters] = useState({
    type: 'all',
    origin: 'all',
  });
  const [currentSort, setCurrentSort] = useState('alphabetAsc');

  const handleTypeChange = (event) => {
    const newType = event.target.value;
    setCurrentFilters((prevFilters) => ({
      ...prevFilters,
      type: newType,
    }));
    dispatch(filterPokemons(newType, currentFilters.origin));
  };

  const handleOriginChange = (event) => {
    const newOrigin = event.target.value;
    setCurrentFilters((prevFilters) => ({
      ...prevFilters,
      origin: newOrigin,
    }));
    dispatch(filterPokemons(currentFilters.type, newOrigin));
  };

  const handleSortChange = (event) => {
    const newSort = event.target.value;
    setCurrentSort(newSort);
    dispatch(orderPokemons(newSort));
    console.log(newSort);
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div className={styles.filterContainer}>
      <div className={styles.filterGroup}>
        <label>Filter by Type:</label>
        <select value={currentFilters.type} onChange={handleTypeChange}>
          <option value="all">All Types</option>
          {pokemonTypes.map((type) => (
            <option key={type.id_Type} value={type.name}>
              {capitalizeFirstLetter(type.name)}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.filterGroup}>
        <label>Filter by Origin:</label>
        <select value={currentFilters.origin} onChange={handleOriginChange}>
          <option value="all">All Origins</option>
          <option value="api">API Origin</option>
          <option value="bdd">Create Origin</option>
        </select>
      </div>
      <div className={styles.filterGroup}>
        <label>Sort:</label>
        <select value={currentSort} onChange={handleSortChange}>
          <option value="alphabetAsc">Alphabetically (A-Z)</option>
          <option value="alphabetDesc">Alphabetically (Z-A)</option>
          <option value="attackAsc">Attack (Low to High)</option>
          <option value="attackDesc">Attack (High to Low)</option>
        </select>
      </div>
    </div>
  );
};

export default FilterComponent;
