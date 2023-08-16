import { GET_POKEMONS, GET_TYPES, ORDER_POKEMONS, FILTER_POKEMONS } from "./actions";

const initialState = {
  pokemons: [],
  filterPokemons: [],
  pokemonTypes: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMONS:
      return { ...state, pokemons: action.payload, filterPokemons: action.payload };
    case GET_TYPES:
      return { ...state, pokemonTypes: action.payload };
      case FILTER_POKEMONS:
        const { typeFilter, originFilter } = action.payload;
        let filteredPokemons = state.pokemons;
      
        if (typeFilter !== "all") {
          filteredPokemons = filteredPokemons.filter(pokemon =>
            pokemon.types.includes(typeFilter)
          );
        }
      
        if (originFilter === "api") {
          filteredPokemons = filteredPokemons.filter(pokemon => !pokemon.created);
        } else if (originFilter === "bdd") {
          filteredPokemons = filteredPokemons.filter(pokemon => pokemon.created);
        }
      
        return {
          ...state,
          filterPokemons: filteredPokemons,
        };
      case ORDER_POKEMONS:
        const orderedFilterPokemons = [...state.filterPokemons];
        const sortType = action.payload;
      
        if (sortType === 'alphabetAsc') {
          orderedFilterPokemons.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortType === 'alphabetDesc') {
          orderedFilterPokemons.sort((a, b) => b.name.localeCompare(a.name));
        } else if (sortType === 'attackAsc') {
          orderedFilterPokemons.sort((a, b) => a.attack - b.attack);
        } else if (sortType === 'attackDesc') {
          orderedFilterPokemons.sort((a, b) => b.attack - a.attack);
        }
      
        return {
          ...state,
          filterPokemons: orderedFilterPokemons,
        };

    default:
      return state;
  }
};

export default rootReducer;
