import { SEARCH_MANGA, FETCH_MANGAS, REMOVE_MANGA  } from './types'
import axios from 'axios'

export const searchManga = text => dispatch => {

  dispatch({
    type: SEARCH_MANGA,
    payload: text,
  })
};

export const fetchMangas = text => dispatch => {
  const uri = encodeURI(text)
  axios
    .get(`https://kitsu.io/api/edge/anime?filter[text]=${uri}`)
    .then(response =>
      dispatch({
        type: FETCH_MANGAS,
        payload: response.data.data,
        text: text,
      })
    )
    .catch(err => console.log(err));
};





