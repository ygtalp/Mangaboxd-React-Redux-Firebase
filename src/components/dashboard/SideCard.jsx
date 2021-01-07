import React from "react";
import moment from "moment";
import { connect } from "react-redux";
import { removeManga } from "../../actions/taskActions";
const SideCard = ({ manga, removeManga, prm }) => {
  const handleRemove = (id) => {
    removeManga(id);
  };
  let title = "";
  let start = "";
  let end = "";
  let bookmarked = "";
  let queued = "";
  let watching = "";
  let completed = "";

  bookmarked = manga.bookmarked;
  queued = manga.queued;
  watching = manga.watching;
  completed = manga.completed;

  return (
    <>
      {
        ((start = manga.attributes.startDate
          ? manga.attributes.startDate.slice(0, 4)
          : null),
        (end = manga.attributes.endDate
          ? manga.attributes.endDate.slice(0, 4)
          : null),
        (title = manga.attributes.titles.en_us
          ? manga.attributes.titles.en_us
          : manga.attributes.titles.en
          ? manga.attributes.titles.en
          : manga.attributes.titles.en_jp),
        (
          <div style={{ flex: "0 0 25%", maxWidth: "25%" }}>
            <div
              className="card card-body bg-dark "
              title={title}
              style={{
                backgroundColor: "#333!important",
                padding: "5px",
              }}
            >
              <div className="hoverContainer zoom">
                <div className="hoverBox" style={{ marginBottom: "0px" }}>
                  <div style={{ paddingBottom: "0px" }}>
                    <div className="img" style={{ position: "relative" }}>
                      <img
                        className="w-100 hoverImage"
                        src={manga.attributes.posterImage.medium}
                        style={{
                          borderRadius: "5px",
                          cursor: "pointer",
                          position: "relative",
                        }}
                        alt="Manga Cover"
                      />
                    </div>
                    <div className="sTitle">
                      <span
                        title={title}
                        style={{ padding: "0px", bottom: "15px" }}
                      >
                        {title}
                      </span>
                    </div>
                    <div className="absol">
                      <div disabled className="hoverBookmark">
                        <div className="hoverText text-danger" title="Delete">
                          <span
                            className="material-icons"
                            style={{ fontSize: "48px" }}
                            onClick={() => handleRemove(manga.id)}
                            
                          >
                            delete
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeManga: (id) => dispatch(removeManga(id)),
  };
};
export default connect(null, mapDispatchToProps)(SideCard);
