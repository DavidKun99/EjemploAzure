import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./Landing.module.css";

const Landing = () => {
  const navigate = useNavigate();

  const handleEnterButtonClick = () => {
    navigate('/home');
  };

  return (
    <div className={styles.container}>
      <div className={styles.logoBox}>
        <img src={"/Logo.png"} alt="Logo" className={styles.logo} />
        <h2>Pokemon APP</h2>
        <button onClick={handleEnterButtonClick} className={styles.enterButton}>
        Welcome
      </button>
      </div>
      <img src={"/LandingImg.jpeg"} alt="Landing" className={styles.backgroundImg} />
    </div>
  );
};

export default Landing;
