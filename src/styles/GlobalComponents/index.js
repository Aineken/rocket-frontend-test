import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: auto;
  padding: 0 1rem 1rem;
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);

  border-top: 2px solid grey;
  border-right: 2px solid grey;
  border-bottom: 2px solid grey;
  border-left: 4px solid black;
  background: transparent;
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;

export const MainTitle = styled.h3`
  font-size: 72px;
  line-height: 86px;
  /* identical to box height */
  text-align: center;
  margin-top: 50px;
  color: #000000;
`;
