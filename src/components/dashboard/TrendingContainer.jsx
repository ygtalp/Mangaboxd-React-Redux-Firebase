import TrendingCard from "./TrendingCard";
import React, { Component, useEffect } from "react";
import { connect } from "react-redux";
import { fetchtrendingMangas } from "../../actions/trendingActions";

function TrendingContainer({ trending, fetchtrendingMangas }) {
  useEffect(() => {
    fetchtrendingMangas();
  }, []);

  let contentTrend =
    trending &&
    trending.trendingMangasData &&
    trending.trendingMangasData.map((trend, index) => (  
        <TrendingCard key={index} trend={trend} />
    ));

  return (
    <div className="row" style={{ margin: "0px" }}>
      {contentTrend}
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchtrendingMangas: () => dispatch(fetchtrendingMangas()),
  };
};

const mapStateToProps = (state) => ({
  trending: state.trending,
});

export default connect(mapStateToProps, mapDispatchToProps)(TrendingContainer);
