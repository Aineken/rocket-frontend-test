import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  padding-top: 2rem;
  background-color: #000000;
  width: 100%;
  overflow: hidden;
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
  width: 100%;

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
`;
