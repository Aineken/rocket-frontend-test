import styled from "styled-components";

export const SearchContainer = styled.div`
  background-color: #000;
  margin: 0;
  padding: 30px 40px;

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
`;

export const SearchTitle = styled.h4`
  font-size: 72px;
  line-height: 86px;
  text-align: center;
  color: #ffffff;
`;

export const CategoriesContainer = styled.div`
  display: flex;
  overflow-y: auto;
  gap: 30px;
  margin-bottom: 30px;
  padding: 30px;
`;

export const Categories = styled.p`
  font-size: 18px;
  line-height: 21px;
  white-space: nowrap;
`;
