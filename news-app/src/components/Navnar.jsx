import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
        <ul>
          <li>
            <NavLink to="/mytweets">My tweets</NavLink>
          </li>
          <li>
            <NavLink to="/savedtweets">Saved Tweets</NavLink>
          </li>
          <li>
            <NavLink to="/newstutby">TUT.by</NavLink>
          </li>
          <li>
            <NavLink to="/newshabr">Habr</NavLink>
          </li>
          <li>
            <NavLink to="/finance">Finance</NavLink>
          </li>
        </ul>
    </nav>
  );
};

export default Navbar;
