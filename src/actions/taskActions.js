import { toast } from "react-toastify";
import * as actions from './types'
import { getFirestore } from "redux-firestore";
import { getFirebase } from "react-redux-firebase";


export const addBookmark = manga => async (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const firestore = getFirestore();
  const authorId = getState().firebase.auth.uid;
  const bookmarked = getState().mangas.bookmarked
  const queued = getState().mangas.queued
  const watching = getState().mangas.watching
  const completed = getState().mangas.completed

  const mangalar = getState().firestore.ordered.mangas
  const ids = []
  mangalar.forEach(mangala => {
    const id = mangala.id
    ids.push(id)
  })

  const targetId = manga.id
  const target = []
  target.push(targetId)

  const n = ids.includes(target[0])

  n ? toast.error("Eklemişsin zaten..")
    : (
      firestore
        .collection("mangas")
        .add({
          ...manga,
          authorId: authorId,
          date: new Date(),
          bookmarked: !bookmarked,
          queued: queued,
          watching: watching,
          completed: completed
        })
        .then(() => {
          dispatch({
            type: "ADD_TO_BOOKMARK",
            manga,
          });
        })
        .catch((err) => {
          dispatch({
            type: "ADD_TO_BOOKMARK_ERR",
            err,
          });
        })
    )
  ids.length = 0
};

export const addQueue = manga => async (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const firestore = getFirestore();
  const authorId = getState().firebase.auth.uid;
  const bookmarked = getState().mangas.bookmarked
  const queued = getState().mangas.queued
  const watching = getState().mangas.watching
  const completed = getState().mangas.completed

  const mangalar = getState().firestore.ordered.mangas
  const ids = []
  mangalar.map(mangala => {
    const id = mangala.id
    ids.push(id)

  })

  const targetId = manga.id
  const target = []
  target.push(targetId)

  const n = ids.includes(target[0])

  n ? toast.error("Eklemişsin zaten..")
    : (
      firestore
        .collection("mangas")
        .add({
          ...manga,
          authorId: authorId,
          date: new Date(),
          bookmarked: bookmarked,
          queued: !queued,
          watching: watching,
          completed: completed
        })
        .then(() => {
          dispatch({
            type: "ADD_TO_QUEUE",
            manga,
          });
        })
        .catch((err) => {
          dispatch({
            type: "ADD_TO_QUEUE_ERR",
            err,
          });
        })
    )
  ids.length = 0
};



export const addWatching = manga => async (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const firestore = getFirestore();
  const authorId = getState().firebase.auth.uid;
  const bookmarked = getState().mangas.bookmarked
  const queued = getState().mangas.queued
  const watching = getState().mangas.watching
  const completed = getState().mangas.completed

  const mangalar = getState().firestore.ordered.mangas
  const ids = []
  mangalar.forEach(mangala => {
    const id = mangala.id
    ids.push(id)
  })

  const targetId = manga.id
  const target = []
  target.push(targetId)

  const n = ids.includes(target[0])

  n ? toast.error("Eklemişsin zaten..")
    : (

      firestore
        .collection("mangas")
        .add({
          ...manga,
          authorId: authorId,
          date: new Date(),
          bookmarked: bookmarked,
          queued: queued,
          watching: !watching,
          completed: completed
        })
        .then(() => {
          dispatch({
            type: "ADD_TO_WATCHING",
            manga,
          });
        })
        .catch((err) => {
          dispatch({
            type: "ADD_TO_WATCHING_ERR",
            err,
          });
        })
    )
  ids.length = 0
};


export const addCompleted = manga => async (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const firestore = getFirestore();
  const authorId = getState().firebase.auth.uid;
  const bookmarked = getState().mangas.bookmarked
  const queued = getState().mangas.queued
  const watching = getState().mangas.watching
  const completed = getState().mangas.completed

  const mangalar = getState().firestore.ordered.mangas
  const ids = []
  mangalar.forEach(mangala => {
    const id = mangala.id
    ids.push(id)
  })

  const targetId = manga.id
  const target = []
  target.push(targetId)

  const n = ids.includes(target[0])

  n ? toast.error("Eklemişsin zaten..")
    : (

      firestore
        .collection("mangas")
        .add({
          ...manga,
          authorId: authorId,
          date: new Date(),
          bookmarked: bookmarked,
          queued: queued,
          watching: watching,
          completed: !completed
        })
        .then(() => {
          dispatch({
            type: "ADD_TO_COMPLETED",
            manga,
          });
        })
        .catch((err) => {
          dispatch({
            type: "ADD_TO_COMPLETED_ERR",
            err,
          });
        })
    )
  ids.length = 0
};






export const removeManga = (id) => {
  return (dispatch, getState, { getFirestore, getFirebase }) => {
    const firestore = getFirestore();
    const data = [];
    data = getState().firestore.ordered.mangas;
    const newData = data.filter(manga => manga.id !== id);
    firestore
      .collection("mangas")
      .where("id", "==", id).get()
      .then(querySnapshot => {
        querySnapshot.docs[0].ref.delete();
      })
      .then(() => {
        dispatch({
          type: "REMOVE_MANGA",
          newData
        });
      })
      .catch((err) => {
        dispatch({
          type: "REMOVE_MANGA_ERR",
          err,
        });
      });
  };
};






// export const removeManga = (manga) => {
//   return (dispatch, getState, { getFirestore, getFirebase }) => {
//         const firestore = getFirestore();

//         firestore
//           .collection("mangas")
//           .where("id", "==", manga.id).get()
//           .then(querySnapshot => {
//             querySnapshot.docs[0].ref.delete();
//           })
//           .then(() => {
//             dispatch({
//               type: "REMOVE_MANGA",
//             });
//           })
//           .catch((err) => {
//             dispatch({
//               type: "REMOVE_MANGA_ERR",
//               err,
//             });
//           });
//       };
//     };












// export const removeManga = (manga) => {
//   return (dispatch, getState, { getFirestore, getFirebase }) => {
//     const firestore = getFirestore();

//     firestore
//       .collection("mangas")
//       .where("id", "==", manga.id).get()
//       .then(querySnapshot => {
//         querySnapshot.docs[0].ref.delete();
//       })
//       .then(() => {
//         dispatch({
//           type: "REMOVE_MANGA",
//         });
//       })
//       .catch((err) => {
//         dispatch({
//           type: "REMOVE_MANGA_ERR",
//           err,
//         });
//       });
//   };
// };





//removeManga
// export const removeManga = (manga) => {
//   return (dispatch, getState, { getFirebase }) => {


//     let item = getFirebase()
//       .firestore()
//       .collection("mangas").where("id", "==", manga.id).get();

//       item.then(x => {
//         x.docs[0].ref.delete();
//       }).then(() => {
//         dispatch({
//           type: "REMOVE_MANGA",
//           manga
//         });
//       })
//       .catch((err) => {
//         dispatch({
//           type: "REMOVE_MANGA_ERR",
//           err,
//         });
//       });

//   };
// };














//addTask
export const addTask = (task) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    const authorId = getState().firebase.auth.uid
    const bookmarked = getState().

      firestore
      .collection("tasks")
      .add({
        ...task,
        authorId: authorId,
        date: new Date(),
      })
      .then(() => {
        dispatch({
          type: "ADD_TASK",
          task,
        });
      })
      .catch((err) => {
        dispatch({
          type: "ADD_TASK_ERR",
          err,
        });
      });
  };
};


//removeTask
export const removeTask = (task) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    firestore
      .collection("tasks")
      .doc(task.id)
      .delete()
      .then(() => {
        dispatch({
          type: "REMOVE_TASK",
        });
      })
      .catch((err) => {
        dispatch({
          type: "REMOVE_TASK_ERR",
          err,
        });
      });
  };
};


//toggleChecked
export const toggleChecked = (task) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();

    firestore
      .collection("tasks")
      .doc(task.id)
      .set(
        {
          ...task,
          checked: !task.checked,
        },
        { merge: true }
      )
      .then(() => {
        dispatch({
          type: "TOGGLE_CHECKED",
          task,
        });
      })
      .catch((err) => {
        dispatch({
          type: "TOGGLE_CHECKED_ERR",
          err,
        });
      });
  };
};
