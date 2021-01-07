import * as actions from './types'

export const login = creds => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signInWithEmailAndPassword(creds.email, creds.password)
      .then(() => {
        dispatch({ type: "LOGIN" });
      })
      .catch(err => {
        dispatch({ type: "LOGIN_ERR" }, err);
      });
  };
};

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: "SIGN_OUT" });
      });
  };
};

export const signUp = creds => async (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const firestore = getFirestore();
  const firebase = getFirebase();
  dispatch({ type: actions.AUTH_START });

  try {
    const res = await firebase
      .auth()
      .createUserWithEmailAndPassword(creds.email, creds.password)
    //const user = firebase.auth().currentUser;
    await firestore.collection('users').doc(res.user.uid).set({ username: creds.username }).then(() => {
      dispatch({ type: actions.SIGN_UP });
    })
  }
  catch (err) {
    dispatch({ type: actions.AUTH_FAIL }, err)}
  dispatch({ type: actions.AUTH_END })
};
