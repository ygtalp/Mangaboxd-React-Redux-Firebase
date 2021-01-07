import React, { Component } from "react";
import {
  addBookmark,
  addQueue,
  addWatching,
  addCompleted,
} from "../../actions/taskActions";

import { connect } from "react-redux";
export class TrendingCard extends Component {
  state = {
    manga: "",
    bookmarked: false,
    bookmark: false,
    queued: false,
    watching: false,
    completed: false,
  };

  handleSubmitBookmark = (bookmark) => {
    this.props.addBookmark(bookmark);
  };
  handleSubmitQueue = (queue) => {
    this.props.addQueue(queue);
  };
  handleSubmitWatching = (watching) => {
    this.props.addWatching(watching);
  };
  handleSubmitCompleted = (completed) => {
    this.props.addCompleted(completed);
  };

  render() {
    const { trend } = this.props;
    let title = "";
    let start = "";
    let end = "";

    start = trend.attributes.startDate
      ? trend.attributes.startDate.slice(0, 4)
      : null;
    end = trend.attributes.endDate
      ? trend.attributes.endDate.slice(0, 4)
      : null;

    title = trend.attributes.titles.en_us
      ? trend.attributes.titles.en_us
      : trend.attributes.titles.en
      ? trend.attributes.titles.en
      : trend.attributes.titles.en_jp;

    return (
      <div className="mb-2" style={{ flex: "0 0 33%", maxWidth: "33%" }}>
        <div
          className="card card-body bg-dark "
          title={title}
          style={{
            backgroundColor: "#333!important",
            padding: "0.9rem",
          }}
        >
          <div className="hoverContainer zoom">
            <div className="hoverBox">
              <div className="hoverPoster">
                <div className="img">
                  <img
                    className="w-100 hoverImage"
                    src={trend.attributes.posterImage.medium}
                    style={{ borderRadius: "5px", cursor: "pointer" }}
                    alt="Manga Cover"
                  />
                  <div className="absol">
                    <div
                      disabled
                      className="hoverBookmark"
                      onClick={() => this.handleSubmitBookmark(trend)}
                    >
                      <div className="hoverText" title="Add to Bookmark">
                        <span
                          className="material-icons"
                          style={{ fontSize: "48px" }}
                        >
                          turned_in
                        </span>
                      </div>
                    </div>

                    <div
                      className="hoverQueue"
                      onClick={() => this.handleSubmitQueue(trend)}
                      title="Want to Watch"
                    >
                      <div className="hoverText">
                        <i
                          className="material-icons"
                          style={{ fontSize: "48px" }}
                        >
                          add_to_queue
                        </i>
                      </div>
                    </div>
                    <div
                      className="hoverWatching"
                      onClick={() => this.handleSubmitWatching(trend)}
                    >
                      <div className="hoverText" title="Started Watching">
                        <img
                          src="https://drive.google.com/uc?id=1YPP21hFLtaLboiGHg0Bs5yWptANoSvvX"
                          style={{ justifySelf: "center" }}
                          width="48px"
                        ></img>
                      </div>
                    </div>
                    <div
                      className="hoverCompleted"
                      onClick={() => this.handleSubmitCompleted(trend)}
                      title="Completed"
                    >
                      <div className="hoverText">
                        <img
                          src="https://drive.google.com/uc?id=1AQMwOWEzgEYaIDC65j2gGMOU13CeoeF5"
                          style={{ justifySelf: "center" }}
                          width="48px"
                        ></img>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rating">
                  <span className="align-right">
                    {trend.attributes.averageRating}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <span title={title} className="cardTitle">
            {title}
          </span>
          <span className="year">
            {start} - {trend.attributes.status}
          </span>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addBookmark: (bookmark) => dispatch(addBookmark(bookmark)),
    addQueue: (queue) => dispatch(addQueue(queue)),
    addWatching: (watching) => dispatch(addWatching(watching)),
    addCompleted: (completed) => dispatch(addCompleted(completed)),
  };
};

export default connect(null, mapDispatchToProps)(TrendingCard);
