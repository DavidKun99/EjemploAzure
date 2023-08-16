import { Link } from "react-router-dom";
import styles from "./Card.module.css";

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const Card = (props) => {
  const capitalizedPokeName = capitalizeFirstLetter(props.name);
  const capitalizedTypes = props.types.map((t) => t.toUpperCase());
  const handleImageError = (event) => {
    event.target.src = "/createPokemon.png";
  };
  return (
    <Link to={`/detail/${props.id_Pokemon}`}>
      <div className={styles.container} style={{
        backgroundImage: `url("/card.jpg")`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}>
        <div className={styles.card} >
          <img src={props.image} alt={props.name} onError={handleImageError} />
          <h1 className={styles.pokeName}>{capitalizedPokeName}</h1>
          <h3>Type:</h3>
          <div className={styles.typesContainer}>
            {capitalizedTypes.map((t, index) => (
              <p key={index}>{t}</p>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;