import React, { Component } from "react";
import { searchManga, fetchMangas } from "../../actions/searchmangaAction";
import { connect } from "react-redux";

export class SearchManga extends Component {
  onChange = (e) => {
    this.props.searchManga(e.target.value);
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.props.fetchMangas(this.props.text);
  };
  render() {
    return (
      <section
        className="searchbox-wrap container"
        id="searchManga"
        onSubmit={this.onSubmit}
      >
        <input
          type="text"
          name="searchmangaText"
          placeholder="Search..."
          className="searchbox"
          onChange={this.onChange}
        />
        <button type="submit" className="btn btn-primary btn-bg mt-3">
          Search
        </button>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  text: state.mangas.text,
});

export default connect(mapStateToProps, { searchManga, fetchMangas })(
  SearchManga
);
