import MangaCard from "./MangaCard";
import React, { Component } from "react";
import { connect } from "react-redux";

export class SearchMangasContainer extends Component {
  render() {
    const { mangas } = this.props;
    let content = "";

    content =
      mangas.length > 0
        ? mangas.map((manga, index) => <MangaCard key={index} manga={manga} />)
        : null;
    return (
      <div className="row" style={{ margin: "0px" }}>
        {content}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  mangas: state.mangas.mangas,
});

export default connect(mapStateToProps)(SearchMangasContainer);
