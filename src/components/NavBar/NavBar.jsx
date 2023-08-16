import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './NavBar.module.css';

const NavBar = () => {
  const pokeballImage = '/pokeball.png';
  const pokemonImage = '/pokemon.png';
  const location = useLocation();

  const isLinkActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.logoContainer}>
        <img src={"/Logo.png"} alt="Logo" className={styles.logo} />
        <h2>Pokemon APP</h2>
      </div>
      <div className={styles.linksContainer}>
        <NavLink
          to="/home"
          className={styles.navLink}
          activeClassName={styles.activeLink}
        >
          <img
            src={isLinkActive('/home') ? pokemonImage : pokeballImage}
            alt="Pokeball"
            className={styles.pokeballIcon}
          />
          Home
        </NavLink>
        <NavLink
          to="/form"
          className={styles.navLink}
          activeClassName={styles.activeLink}
        >
          <img
            src={isLinkActive('/form') ? pokemonImage : pokeballImage}
            alt="Pokeball"
            className={styles.pokeballIcon}
          />
          Create Pokemon
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
