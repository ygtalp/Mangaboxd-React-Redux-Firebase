import { SEARCH_MANGA, FETCH_MANGAS, ADD_TO_BOOKMARK, ADD_TO_QUEUE, ADD_TO_WATCHING, ADD_TO_COMPLETED, TRENDING_MANGAS, REMOVE_MANGA, REMOVE_MANGA_ERR, REMOVE_MANGA_START } from '../actions/types'
import { toast } from "react-toastify";

const initialState = {
  txtForward: '',
  text: '',
  mangas: [],
  loading: false,
  manga: [],
  bookmarked: false,
  queued: false,
  watching: false,
  completed: false,
};

export default function (state = initialState, action, payload) {

  switch (action.type) {
    case SEARCH_MANGA:
      return {
        ...state,
        text: action.payload,
        loading: false
      };
    case FETCH_MANGAS:
      return {
        ...state,
        mangas: action.payload,
        txtForward: action.text,
        loading: false
      };
    case ADD_TO_BOOKMARK:
      toast.success("Bookmark'a güzelli şekilde ekledik!!");
      return {
        ...state,
      };
    case ADD_TO_QUEUE:
      toast.success("Daha sonra izleyecekmişsin, unutmaman için ekledik!!");
      return {
        ...state,
      };
    case ADD_TO_WATCHING:
      toast.success("Şuan izliyormuşsun, Kuşlar söyledi..");
      return {
        ...state,
      };
    case ADD_TO_COMPLETED:
      toast.success("Fenasın karşim tamamlamışsın!!");
      return {
        ...state,
      };
    case REMOVE_MANGA_START:
      return {
        ...state,
      };
    case REMOVE_MANGA:
      toast.success("Manga başarılı bir şekilde silindi.");
      return {
        ...state,
      };
    case REMOVE_MANGA_ERR:
      toast.success("Bir şeyler ters gitti..");
      return {
        ...state,
      };
    default:
      return state


  }
}