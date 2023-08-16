import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getPokemonByID } from '../../redux/actions';
import { useParams } from 'react-router-dom';
import styles from './Detail.module.css';

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [pokemon, setPokemonInfo] = useState(null);

  useEffect(() => {
    const fetchPokemonInfo = async () => {
      try {
        const pokemonInfo = await dispatch(getPokemonByID(id));
        setPokemonInfo(pokemonInfo);
      } catch (error) {
        console.error('Error fetching Pokémon info:', error);
      }
    };

    fetchPokemonInfo();
  }, [id, dispatch]);

  const capitalizedTypes = pokemon?.types.map((t) => t.toUpperCase()); 

  return (
    <div className={styles.container}>
      {pokemon ? (
        <div>
          <div
            className={styles.principal}
            style={{
              backgroundImage: `url("/detail.png")`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
          >
            <img src={pokemon.image} alt={pokemon.name} />
            <h1>{pokemon.name.toUpperCase()}</h1>
            <div className={styles.container}>
              <div className={styles.left}>
                <p>ID: {pokemon.id_Pokemon}</p>
                <p>Vida: {pokemon.health}</p>
                <p>Ataque: {pokemon.attack}</p>
                <p>Defensa: {pokemon.defense}</p>
              </div>
              <div className={styles.left}>
                <p>Velocidad: {pokemon.speed}</p>
                <p>Altura: {pokemon.height}</p>
                <p>Peso: {pokemon.weight}</p>
              </div>
            </div>
            <div className={styles.typesContainer}>
              {capitalizedTypes.map((t, index) => (
                <p key={index}>{t}</p>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <p>Cargando información del Pokémon...</p>
      )}
    </div>
  );
};

export default Detail;
