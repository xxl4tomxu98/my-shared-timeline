// TODO: Import all of your importing your API util function
import * as APIUtil from '../util/apiUtil';

export const RECEIVE_GIFS = "RECEIVE_GIFS";

//action creator func
const receiveGifs = gifs => {
    return {
        type: RECEIVE_GIFS,
        gifs
    }
}

// thunk action creator used to fetch api and call dispatch action
export const fetchGifs = searchTerm => {
    return dispatch => {
        return APIUtil.fetchGifs(searchTerm)
            .then(res => res.json())
            .then(res => dispatch(receiveGifs(res.data)));
    }
}
