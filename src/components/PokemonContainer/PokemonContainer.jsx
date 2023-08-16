import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import styles from "./PokemonContainer.module.css";
import { useSelector } from "react-redux";

const PokemonContainer = () => {
  const pokemonsMostrar = useSelector(state => state.filterPokemons);
  const cardsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {setCurrentPage(1);
  }, [pokemonsMostrar]);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = pokemonsMostrar.slice(indexOfFirstCard, indexOfLastCard);

  const totalPages = Math.ceil(pokemonsMostrar.length / cardsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className={styles.container}>
      <div className={styles.cardsRow}>
        {currentCards.map((pokemon) => (
          <Card
            key={pokemon.id_Pokemon}
            id_Pokemon ={pokemon.id_Pokemon}
            name={pokemon.name}
            types={pokemon.types}
            image={pokemon.image}
          />
        ))}
      </div>
      <div className={styles.pagination}>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? styles.activePage : ""}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PokemonContainer;
