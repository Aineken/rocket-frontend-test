import React from "react";
import { Link } from "react-router-dom";
import { NavBar, Div1, Div2, NavLink } from "./HeaderStyled";
import logo from "../../utils/Vector.svg";
import { FaHistory, FaHeart, FaSearch } from "react-icons/fa";

function Header() {
  return (
    <NavBar>
      <Div1>
        <Link to="/" style={{ display: "flex", alignItems: "center" }}>
          <img src={logo} alt="logo" height={28} />
          <span>ImageStock</span>
        </Link>
      </Div1>
      <Div2>
        <NavLink white>
          <FaSearch />
          <span>Search</span>
        </NavLink>
        <NavLink white>
          <FaHeart />
          <span>Likes</span>
        </NavLink>
        <NavLink white>
          <FaHistory />
          <span>History</span>
        </NavLink>
      </Div2>
    </NavBar>
  );
}

export default Header;
