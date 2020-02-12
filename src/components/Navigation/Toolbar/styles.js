import styled from "styled-components";

export const Header = styled.header`
  height: 56px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #222831;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  z-index: 90;

  nav {
    height: 100%;
  }
`;

export const HideOnMobile = styled.div`
  height: 100%;
  @media (max-width: 850px) {
    display: none;
  }
`;
