import React from "react";

const Bookmark = ({ bookmarked, onClick }) => {
  if (bookmarked === true) {
    return (
      <div className="hoverBookmar text-success" 
      onClick={onClick}>
        <div className="hoverText" title="Add to Bookmark">
          <span className="material-icons" style={{ fontSize: "48px" }}>
            turned_in
          </span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="hoverBookmark text-muted" 
      onClick={onClick}>
        <div className="hoverText" title="Add to Bookmark">
          <span className="material-icons" style={{ fontSize: "48px" }}>
            turned_in
          </span>
        </div>
      </div>
    );
  }
};

export default Bookmark;
