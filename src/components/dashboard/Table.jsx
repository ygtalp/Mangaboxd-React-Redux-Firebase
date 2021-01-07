import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import SideCard from "./SideCard";
import { removeManga } from "../../actions/taskActions";
import linq from "linq";

const Table = ({ mangas, prm }) => {
  if (prm === "bm") {
    return (
      <>
        <div className="row" style={{ margin: "0px", padding: "0px" }}>
          {mangas &&
            mangas
              .filter(function (item) {
                return item.bookmarked;
              })
              .map((manga) => (
                <SideCard prm={prm} manga={manga} key={manga.id} />
              ))}
        </div>
      </>
    );
  } else if (prm === "completed") {
    return (
      <>
        <div className="row" style={{ margin: "0px", padding: "0px" }}>
          {mangas &&
            mangas
              .filter(function (item) {
                return item.completed;
              })
              .map((manga) => (
                <SideCard prm={prm} manga={manga} key={manga.id} />
              ))}
        </div>
      </>
    );
  } else if (prm === "queued") {
    return (
      <>
        <div className="row" style={{ margin: "0px", padding: "0px" }}>
          {mangas &&
            mangas
              .filter(function (item) {
                return item.queued;
              })
              .map((manga) => (
                <SideCard prm={prm} manga={manga} key={manga.id} />
              ))}
        </div>
      </>
    );
  } else if (prm === "watching") {
    return (
      <>
        <div className="row" style={{ margin: "0px", padding: "0px" }}>
          {mangas &&
            mangas
              .filter(function (item) {
                return item.watching;
              })
              .map((manga) => (
                <SideCard prm={prm} manga={manga} key={manga.id} />
              ))}
        </div>
      </>
    );
  } else return null;
};
const mapStateToProps = (state) => {
  console.log(state);
  const mangas = state.firestore.ordered.mangas;
  return {
    mangas: mangas,
    uid: state.firebase.auth.uid,
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect((ownProps) => [
    {
      collection: "mangas",
      where: ["authorId", "==", ownProps.uid],
      orderBy: ["date", "desc"],
    },
  ])
)(Table);
