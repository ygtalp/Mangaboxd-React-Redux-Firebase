import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";

import searchmangaReducer from "./searchmangaReducer";
import trendingReducer from "./trendingReducer";

export default combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  mangas: searchmangaReducer,
  trending: trendingReducer
});

