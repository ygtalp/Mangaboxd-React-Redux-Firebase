import React, { Component } from "react";

import { connect } from "react-redux";

import { searchManga, fetchMangas } from "../../actions/searchmangaAction";

export class SearchForm extends Component {
  onChange = (e) => {
    this.props.searchManga(e.target.value);
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.fetchMangas(this.props.text);
  };

  render() {
    return (
      <>
        <div className="con">
          <form id="searchForm" onSubmit={this.onSubmit}>
            <input
              type="text"
              className="form-control"
              style={{
                width: "40%",
                display: "inline-block",
              }}
              name="searchText"
              placeholder="Search Movies, TV Series ..."
              onChange={this.onChange}
            />
            <button
              type="submit"
              className="btn btn-primary "
              style={{
                padding: "0px",
                margin: "0px",
                width: "10%",
                height: "40px",
                marginBottom: "5px",
                marginLeft: "20px",
                display: "inline-block",
              }}
            >
              Search
            </button>
          </form>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  text: state.mangas.text,
});

export default connect(mapStateToProps, { searchManga, fetchMangas })(
  SearchForm
);
