import { ADD_TO_BOOKMARK, ADD_TO_QUEUE, ADD_TO_WATCHING, ADD_TO_COMPLETED, TRENDING_MANGAS } from '../actions/types'
import { toast } from "react-toastify";

const initialState = {
  trendingMangasData: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case TRENDING_MANGAS:
      return {
        ...state,
        trendingMangasData: action.payload,
      };
    default:
      return state


  }
}