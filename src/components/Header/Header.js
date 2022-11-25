import React from "react";
import { Link } from "react-router-dom";
import { Container, Div1, Div2, NavLink } from "./HeaderStyled";
import logo from "../../utils/andrzul_logo.svg";

function Header() {
  return (
    <Container>
      <Div1>
        <Link to="/" style={{ display: "flex", alignItems: "center" }}>
          <img src={logo} alt="logo" height={45} />
        </Link>
      </Div1>
      <Div2></Div2>
    </Container>
  );
}

export default Header;
