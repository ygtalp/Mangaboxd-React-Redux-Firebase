import { TRENDING_MANGAS } from './types'
import axios from 'axios'



export const fetchtrendingMangas = () => {
  return (dispatch) => {
    axios
      .get(`https://kitsu.io/api/edge/trending/manga`)
      .then(response =>
        dispatch({
          type: TRENDING_MANGAS,
          payload: response.data.data
        })
      )
      .catch(err => console.log(err));
  }
}