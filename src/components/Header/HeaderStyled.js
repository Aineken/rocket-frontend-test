import styled from "styled-components";

export const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  padding-top: 2rem;
  background-color: #000;
  width: 100%;
  position: relative;

  ::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: -1;
    left: -9999px;
    right: 0;
    border-left: 9999px solid #000;
    box-shadow: 9999px 0 0 #000;
  }
  @media ${(props) => props.theme.breakpoints.md} {
  }
  @media ${(props) => props.theme.breakpoints.sm} {
  }
`;

export const Div1 = styled.div`
  display: flex;
`;

export const Div2 = styled.div`
  display: flex;
`;

export const NavLink = styled.a`
  font-size: ${(props) => (props.main ? "2.5rem" : "2rem")};
  font-weight: ${(props) => (props.main ? "500" : null)};
  line-height: 32px;
  display: flex;
  width: max-content;

  justify-content: ${(props) => (props.left ? "start" : "center")};
  align-items: center;
  color: ${(props) => (props.white ? "#fff" : "rgba(255, 255, 255, 0.75)")};
  transition: 0.4s ease;

  &:hover {
    color: #fff;
    opacity: 1;
    cursor: pointer;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
  }

  p {
    margin-left: 10px;
  }
`;
