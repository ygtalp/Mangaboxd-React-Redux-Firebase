import React from "react";
import { NavLink } from "react-router-dom";
import { signOut } from "../../actions/authActions";
import { connect } from "react-redux";
import "./cover.css";

const NavItems = ({ signOut, uid, username }) => {
  if (uid) {
    return (
      <nav
        className="nav nav-masthead justify-content-center"
        style={{ display: "inline-flex" }}
      >
        <span className="nav-link username">
          {username}
        </span>
        <NavLink
          to="/login"
          className="nav-link"
          activeClassName="main-nav-active"
          onClick={signOut}
        >
          Log Out
        </NavLink>
      </nav>
    );
  } else {
    return (
      <nav
        className="nav nav-masthead justify-content-center"
        style={{ display: "inline-flex" }}
      >
        <NavLink
          exact
          to="/signup"
          className="nav-link"
          activeClassName="main-nav-active"
        >
          Sign Up
        </NavLink>
        <NavLink
          exact
          to="/login"
          className="nav-link"
          activeClassName="main-nav-active"
        >
          Login
        </NavLink>
      </nav>
    );
  }
};

const mapStateToProps = (state) => {
  const uid = state.firebase.auth.uid;
  const username = state.firebase.profile.username;
  return {
    uid: uid,
    username: username,
  };
};

const mapDistpatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(mapStateToProps, mapDistpatchToProps)(NavItems);
