import React from "react";
import { NavLink } from "react-router-dom";
import NavItems from "./NavItems";
import "./cover.css";

const NavBar = () => {
  return (
    <>
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <header className="masthead mb-auto">
          <div className="inner">
            <h3 className='masthead-brand'>
              <NavLink exact className='nav-link' activeClassName='main-nav-active' to="/">
                MangaBoxd
              </NavLink>
            </h3>
            <NavItems />
          </div>
        </header>
      </div>
    </>
  );
};


export default NavBar;
