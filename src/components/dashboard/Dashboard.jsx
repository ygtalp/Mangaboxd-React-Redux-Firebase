import React, { Component } from "react";
import SearchForm from "../mangas/SearchForm";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import {
  SEARCH_MANGA,
  FETCH_MANGAS,
  TRENDING_MANGAS,
} from "../../actions/types";

import SearchMangasContainer from "./SearchMangasContainer";
import TrendingContainer from "./TrendingContainer";
import Table from "./Table";

const Dashboard = ({ uid, txtForward, mng }) => {
  if (!uid) return <Redirect to="/login" />;
  return (
    <>
      <SearchForm />
      <div className="container" style={{ maxWidth: "90%", display: "flex" }}>
        <div className="col-8" style={{ maxWidth: "60%" }}>
          {mng.length > 0 ? (
            <summary className="red">
              Search results for{" "}
              <p
                style={{
                  color: "#fff",
                  display: "inline-block",
                  marginBottom: "0px",
                }}
              >
                {txtForward}
              </p>
            </summary>
          ) : null}

          <SearchMangasContainer />
          <summary className="red">Trending Mangas</summary>
          <TrendingContainer />
        </div>
        <div style={{ display: "row", width: "100%" }}>
          <section className="marpad" style={{ minWidth: "100%" }}>
            <details>
              <summary>Bookmark</summary>
              <div className="padLR">
                <Table prm={"bm"} />
              </div>
            </details>
          </section>
          <section className="marpad" style={{ minWidth: "100%" }}>
            <details>
              <summary>Want to Watch</summary>
              <div className="padLR">
                <Table prm={"queued"} />
              </div>
            </details>
          </section>
          <section className="marpad" style={{ minWidth: "100%" }}>
            <details>
              <summary>Watching</summary>
              <div className="padLR">
                <Table prm={"watching"} />
              </div>
            </details>
          </section>
          <section className="marpad" style={{ minWidth: "100%" }}>
            <details>
              <summary>Completed</summary>
              <div className="padLR">
                <Table prm={"completed"} />
              </div>
            </details>
          </section>
        </div>
      </div>

      {/* <AddTask /> */}
      {/* <Tasks /> */}
    </>
  );
};

const mapStateToProps = (state) => {
  const uid = state.firebase.auth.uid;
  const txtForward = state.mangas.txtForward;
  const mng = state.mangas.mangas;

  return {
    uid: uid,
    txtForward: txtForward,
    mng: mng,
  };
};

export default connect(mapStateToProps)(Dashboard);
