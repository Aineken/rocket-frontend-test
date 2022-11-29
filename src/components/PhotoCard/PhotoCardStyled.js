import styled from "styled-components";

export const Card = styled.li`
  position: relative;

  :hover .onHover {
    opacity: 1;
    background: rgba(40, 36, 22, 0.5);
  }
  @media ${(props) => props.theme.breakpoints.sm} {
  }
`;

export const CardMedia = styled.img`
  max-width: 100%;
  display: block;
  margin-bottom: 10px;
  grid-row: 1 / -1;
  grid-column: 1;
  border-radius: 8px;
`;

export const InfoContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  place-content: center;
  backdrop-filter: blur(10px);
  color: #fff;
  z-index: 3;
  border-radius: 8px;
  opacity: 0;
  transition: 0.5s;
`;

export const CardImg = styled.img`
  display: flex;
  width: 70px;
  height: 70px;
  justify-content: center;
  border: 1px solid #ffffff;
  border-radius: 8px;
  object-fit: cover;
  margin: auto;
  background-color: #ffffff;
`;
export const CardTitle = styled.h4`
  margin: 30px auto auto;
  font-size: 30px;
  line-height: 36px;
  text-align: center;
`;

export const CardName = styled.p`
  margin: 15px auto auto;
  font-size: 20px;
  line-height: 25px;
  text-align: center;
`;

export const IconsContainer = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  width: max-content;
  gap: 30px;
  margin: 30px auto auto;
`;
