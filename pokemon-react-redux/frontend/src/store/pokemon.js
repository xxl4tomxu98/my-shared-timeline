// import { list } from "../../../pokedex-backend/db/pokemon-repository"
import { removeUser } from './authentication';

const LOAD = 'POKEDEX/POKEMON/LOAD'
const LOAD_DETAIL = 'POKEDEX/POKEMON/LOAD_DETAIL'
const LOAD_TYPES = 'POKEDEX/POKEMON/LOAD_TYPES'
const FORM_ERRORS = "pokedex/pokemon/FORM_ERRORS";
const load = pokemon => {
  return {
    type: LOAD,
    pokemon
  }
}

const loadDetail = detail => {
  return {
    type: LOAD_DETAIL,
    detail
  }
}

const loadTypes = types => {
  return {
    type: LOAD_TYPES,
    types
  }
}

const formErrors = (errors) => {
  return {
    type: FORM_ERRORS,
    errors
  };
};

export const getPokemon = () => async dispatch => {
  const res = await fetch("/api/pokemon")
  if (res.ok) {
    const data = await res.json();
    dispatch(load(data));
    return data;
  } else if (res.status === 401) {
    return dispatch(removeUser());
  }
  throw res;
}

export const getDetail = (id) => async dispatch => {
  const res = await fetch(`/api/pokemon/${id}`)
  if (res.ok) {
    const detail = await res.json()
    dispatch(loadDetail(detail));
    return detail;
  } else if (res.status === 401) {
    return dispatch(removeUser());
  }
  throw res;
}

export const getTypes = () => async dispatch => {
  const res = await fetch("/api/pokemon/types")
  if (res.ok) {
    const pokeTypes = await res.json()
    dispatch(loadTypes(pokeTypes));
    return pokeTypes;
  } else if (res.status === 401) {
    return dispatch(removeUser());
  }
  throw res;
}


export const createPokemon = (pokemon) => async dispatch => {
  const res = await fetch('/api/pokemon/', {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(pokemon)
  });
  if (res.ok) {
    dispatch(getPokemon());
    return res;
  } else if (res.status === 401) {
    dispatch(removeUser());
    return res;
  } else if (res.status === 422) {
    const { errors } = await res.json();
    dispatch(formErrors(errors));
    return res;
  }
  throw res;
};


const initialState = {
  types: [],
}

export default function reducer (state=initialState, action) {
  switch(action.type){
    case LOAD:
      return { ...state, list: action.pokemon };
    case LOAD_DETAIL:
      return { ...state, detail: action.detail };
    case LOAD_TYPES:
      return { ...state, types: action.types };
    case FORM_ERRORS:
      return { ...state, errors: action.errors };
    default:
      return state
  }
}
