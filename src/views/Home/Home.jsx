import React from 'react';
import PokemonContainer from '../../components/PokemonContainer/PokemonContainer';
import SearchBar from '../../components/SearchBar/SearchBar';
import styles from "./Home.module.css";
import FilterComponent from '../../components/FiltersComponent/FilterComponent';

const Home = () => {

  return (
    <div>
      <div className={styles.searchContainer}>
        <SearchBar />
      </div>
      <div className={styles.filterContainer}>
      <FilterComponent/>
      </div>
      <PokemonContainer/>
    </div>
  );
};

export default Home;

