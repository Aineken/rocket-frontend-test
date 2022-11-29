import styled from "styled-components";

export const PhotosBlock = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-gap: 24px;
  align-items: start;
`;
