import React, { useEffect, useState } from 'react';
import styles from './Form.module.css';
import validation from './validation';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { getAllPokemons } from '../../redux/actions';

const Form = () => {
  const pokemonTypes = useSelector((state) => state.pokemonTypes);
  const [formData, setFormData] = useState({
    name: '',
    img: '/createPokemon.png',
    health: '',
    attack: '',
    defense: '',
    speed: '',
    height: '',
    weight: '',
    types: [],
  });
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [validationMessages, setValidationMessages] = useState({});
  const [touchedFields, setTouchedFields] = useState({});
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    setValidationMessages((prevMessages) => ({
      ...prevMessages,
      [name]: '',
    }));

    setTouchedFields((prevTouchedFields) => ({
      ...prevTouchedFields,
      [name]: true,
    }));
  };

  useEffect(() => {
    const updatedValidation = validation(formData);
    setValidationMessages((prevMessages) => ({
      ...prevMessages,
      ...updatedValidation,
    }));
  }, [formData]);

  const handleTypeChange = (event) => {
    const { value } = event.target;
    setFormData({ ...formData, types: [...formData.types, value] });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const updatedValidation = validation(formData);
    setValidationMessages(updatedValidation);

    if (Object.keys(updatedValidation).length === 0) {
      if (formData.types.length === 0) {
        setValidationMessages((prevMessages) => ({
          ...prevMessages,
          types: 'Debe seleccionar al menos un type',
        }));
      } else {
        axios
          .post('http://localhost:3001/pokemons', formData)
          .then((response) => {
            console.log(response.data);
            setShowSuccessAlert(true);
            dispatch(getAllPokemons());
            setTouchedFields({})
            setFormData({
              name: '',
              img: '/createPokemon.png',
              health: '',
              attack: '',
              defense: '',
              speed: '',
              height: '',
              weight: '',
              types: [],
            });
          })
          .catch((error) => {
            console.error('Error al enviar el formulario:', error);
            setShowErrorAlert(true);
          });
      }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src="create.jpg" alt="logo" />
      </div>
      <div className={styles.formContainer}>
        <h2>Create Your Pokemon!</h2>
        {showSuccessAlert && (
          <div className={styles.successAlert}>Pokemon creado con éxito!</div>
        )}
        {showErrorAlert && (
          <div className={styles.errorAlert}>Error Al Crear el Pokemon</div>
        )}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            onFocus={handleInputChange}
            placeholder="Name"
          />
          {touchedFields.name && validationMessages.name && (
            <p className={styles.validationMessage}>
              {validationMessages.name}
            </p>
          )}

          <input
            type="text"
            name="img"
            value={formData.img}
            onChange={handleInputChange}
            onFocus={handleInputChange}
            placeholder="Image URL"
          />
          {touchedFields.img && validationMessages.img && (
            <p className={styles.validationMessage}>
              {validationMessages.img}
            </p>
          )}

          <input
            type="text"
            name="health"
            value={formData.health}
            onChange={handleInputChange}
            onFocus={handleInputChange}
            placeholder="Health"
          />
          {touchedFields.health && validationMessages.health && (
            <p className={styles.validationMessage}>
              {validationMessages.health}
            </p>
          )}

          <input
            type="text"
            name="attack"
            value={formData.attack}
            onChange={handleInputChange}
            onFocus={handleInputChange}
            placeholder="Attack"
          />
          {touchedFields.attack && validationMessages.attack && (
            <p className={styles.validationMessage}>
              {validationMessages.attack}
            </p>
          )}

          <input
            type="text"
            name="defense"
            value={formData.defense}
            onChange={handleInputChange}
            onFocus={handleInputChange}
            placeholder="Defense"
          />
          {touchedFields.defense && validationMessages.defense && (
            <p className={styles.validationMessage}>
              {validationMessages.defense}
            </p>
          )}

          <input
            type="text"
            name="speed"
            value={formData.speed}
            onChange={handleInputChange}
            onFocus={handleInputChange}
            placeholder="Speed"
          />
          {touchedFields.speed && validationMessages.speed && (
            <p className={styles.validationMessage}>
              {validationMessages.speed}
            </p>
          )}

          <input
            type="text"
            name="height"
            value={formData.height}
            onChange={handleInputChange}
            onFocus={handleInputChange}
            placeholder="Height"
          />
          {touchedFields.height && validationMessages.height && (
            <p className={styles.validationMessage}>
              {validationMessages.height}
            </p>
          )}

          <input
            type="text"
            name="weight"
            value={formData.weight}
            onChange={handleInputChange}
            onFocus={handleInputChange}
            placeholder="Weight"
          />
          {touchedFields.weight && validationMessages.weight && (
            <p className={styles.validationMessage}>
              {validationMessages.weight}
            </p>
          )}

          <h5>Types</h5>
          <select
            name="types"
            multiple
            onChange={handleTypeChange}
            value={formData.types}
          >
            {pokemonTypes.map((type) => (
              <option key={type.id} value={type.name}>
                {type.name}
              </option>
            ))}
          </select>
          {touchedFields.types && validationMessages.types && (
            <p className={styles.validationMessage}>
              {validationMessages.types}
            </p>
          )}

          <button type="submit">Create Pokemon</button>
        </form>
      </div>
    </div>
  );
};

export default Form;

