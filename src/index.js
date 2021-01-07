import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import './components/layout/cover.css'
import './grid.min.css';
//import "./main.min.css";
//import './responsive.min.css';
import App from "./App";
//import "./_card.scss";
import $ from "jquery";
import "bootstrap/dist/js/bootstrap.bundle"
import "bootstrap/dist/css/bootstrap.css";
import "./accordion.css";
import { Provider } from "react-redux";
import { useSelector } from "react-redux";
import { isLoaded } from "react-redux-firebase";
import store from './store'



// function AuthIsLoaded({ children }) {
//   const auth = useSelector(state => state.firebase.auth);
//   if (!isLoaded(auth))
//     return (
//       <div className="text-center">
//         <div
//           className="spinner-grow text-primary"
//           style={{ width: "7rem", height: "7rem" }}
//           role="status"
//         >
//           <span className="sr-only">Loading...</span>
//         </div>
//       </div>
//     );
//   return children;
// }

ReactDOM.render(
  <Provider store={store}>
    {/* <AuthIsLoaded> */}
    <App />
    {/* </AuthIsLoaded> */}
  </Provider>,
  document.getElementById("root")
);
