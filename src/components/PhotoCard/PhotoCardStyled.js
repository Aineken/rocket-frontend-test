import styled from "styled-components";

export const Card = styled.li`
  list-style: none;
  font-size: 0;
  overflow: hidden;
  grid-row-end: span 1;
  display: flex;
  align-items: center;

  @media ${(props) => props.theme.breakpoints.sm} {
  }
`;

export const CardMedia = styled.img`
  max-width: 100%;

  object-fit: cover;
  /* vertical-align: bottom; */
`;
