import axios from "axios";
export const GET_POKEMONS= "GET_POKEMONS";
export const GET_TYPES= "GET_TYPES";
export const ORDER_POKEMONS = "ORDER_POKEMONS";
export const FILTER_POKEMONS = "FILTER_POKEMONS";

export const filterPokemons = (typeFilter, originFilter) => {
  return { type: FILTER_POKEMONS, payload: { typeFilter, originFilter } };
};

export const orderPokemons = (rules) => {
  return { type: ORDER_POKEMONS, payload: rules };
};

export const getAllPokemons = () => {
  return async (dispatch) => {
    const urlPokemons = "http://localhost:3001/pokemons";
    const apiData = await axios.get(urlPokemons);
    const pokemons = apiData.data.sort((a, b) => a.name.localeCompare(b.name));
    dispatch({ type: GET_POKEMONS, payload: pokemons });
  };
};

export const getTypes = () => {
  return async (dispatch) => {
    const urlPokemons = "http://localhost:3001/types";
    const apiData = await axios.get(urlPokemons);
    const types = apiData.data;
    dispatch({ type: GET_TYPES, payload: types });
  };
};

export const getPokemonByID = (id) => {
  return async (dispatch) => {
    const urlPokemons = `http://localhost:3001/pokemons/${id}`;
    const apiData = await axios.get(urlPokemons);
    const pokemon = apiData.data;
    return pokemon;
  };
};