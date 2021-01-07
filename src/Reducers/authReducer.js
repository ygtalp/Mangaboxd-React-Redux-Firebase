import { toast } from "react-toastify";

const authReducer = (state = {}, action) => {
  switch (action.type) {
    case "LOGIN":
      toast("Welcome back..");
      return { ...state };
    case "LOGIN_ERR":
      toast.error("Login error..");
      return { ...state };
    case "SIGN_OUT":
      toast("You signed out..");
      return { ...state };
    case "SIGN_UP":
      toast("Welcome..");
      return { ...state };
    case "SIGN_UP_ERR":
      toast.error("Sign up error...");
      return { ...state };
    case "AUTH_FAIL":
      toast.error("Auth fail...");
      return { ...state };
    case "AUTH_END":
      return { ...state };
    default:
      return state;
  }
};

export default authReducer;
