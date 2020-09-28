import Cookies from 'js-cookie'

const SET_USER = 'POKEDEX/AUTH/SET_USER'
const REMOVE_USER = 'POKEDEX/AUTH/REMOVE_USER'

export const setUser = (user) => {
    // debugger;
    return {
        type: SET_USER,
        user
    }
}

export const removeUser = (user) => {
    return {
        type: REMOVE_USER,
    }
}

export const logout = () => dispatch => {
    fetch(`/api/session`, {
      method: 'delete'
    }).then(() => dispatch(removeUser()));
}

function loadUser() {
  const authToken = Cookies.get("token");
  if (authToken) {
    try {
      const payload = authToken.split(".")[1];
      const decodedPayload = atob(payload);
      const payloadObj = JSON.parse(decodedPayload);
      const { data } = payloadObj;
      return data;
    } catch (e) {
      Cookies.remove("token");
    }
  }
  return {};
}

export const login = (email, password) => {
  return async dispatch => {
      const res = await fetch('/api/session', {
          method: "PUT",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({email, password})
      })
      const { player } = await res.json()
      dispatch(setUser(player))
  }
}

export default function reducer(state=loadUser(), action){
    switch(action.type){
        case SET_USER:
            // debugger;
            return action.user
        case REMOVE_USER:
            return {}
        default:
            return state
    }
}
