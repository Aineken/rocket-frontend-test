import React from "react";
import { Link } from "react-router-dom";
import { NavBar, Div1, Div2, NavLink } from "./HeaderStyled";
import logo from "../../utils/andrzul_logo.svg";
import { FaHistory, FaHeart, FaSearch } from "react-icons/fa";

function Header() {
  return (
    <NavBar>
      <Div1>
        <Link to="/" style={{ display: "flex", alignItems: "center" }}>
          <img src={logo} alt="logo" height={80} />
        </Link>
      </Div1>
      <Div2>
        <NavLink white>
          <FaSearch />
          <p>Search</p>
        </NavLink>
        <NavLink white>
          <FaHeart />
          <p>Likes</p>
        </NavLink>
        <NavLink white>
          <FaHistory />
          <p>History</p>
        </NavLink>
      </Div2>
    </NavBar>
  );
}

export default Header;
