const regexNumber = /^[0-9]+$/;
const regexLetter = /^[a-zA-Z]+$/;

export default function validation(pokemonData) {
  let errors = {};

  if (!pokemonData.name) errors.name = "El nombre es requerido";
  else if (!regexLetter.test(pokemonData.name))
    errors.name = "El nombre solo puede contener letras";
  else if (pokemonData.name.length > 25)
    errors.name = "El nombre no puede tener más de 25 caracteres";

  if (!pokemonData.health) errors.health = "Health es requerido";
  else if (!regexNumber.test(pokemonData.health))
    errors.health = "Health debe ser un número";
    else if (parseInt(pokemonData.health) > 255)
    errors.health = "Health no puede ser mayor que 255";

  if (!pokemonData.attack) errors.attack = "Attack es requerido";
  else if (!regexNumber.test(pokemonData.attack))
    errors.attack = "Attack debe ser un número";
  else if (parseInt(pokemonData.attack) > 255)
    errors.attack = "Attack no puede ser mayor que 255";

  if (!pokemonData.defense) errors.defense = "Defense es requerido";
  else if (!regexNumber.test(pokemonData.defense))
    errors.defense = "Defense debe ser un número";
  else if (parseInt(pokemonData.defense) > 255)
    errors.defense = "Defense no puede ser mayor que 255";

  if (!pokemonData.speed) errors.speed = "Speed es requerido";
  else if (!regexNumber.test(pokemonData.speed))
    errors.speed = "Speed debe ser un número";
  else if (parseInt(pokemonData.speed) > 255)
    errors.speed = "Speed no puede ser mayor que 255";

  if (!pokemonData.height) errors.height = "Height es requerido";
  else if (!regexNumber.test(pokemonData.height))
    errors.height = "Height debe ser un número";
  else if (parseInt(pokemonData.height) > 255)
    errors.height = "Height no puede ser mayor que 255";

  if (!pokemonData.weight) errors.weight = "Weight es requerido";
  else if (!regexNumber.test(pokemonData.weight))
    errors.weight = "Weight debe ser un número";
  else if (parseInt(pokemonData.weight) > 255)
    errors.weight = "Weight no puede ser mayor que 255";

  return errors;
}


