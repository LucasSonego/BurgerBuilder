import styled, { css } from "styled-components";

export const Container = styled.div`
  position: fixed;
  height: 100%;
  width: 250px;
  max-width: 70%;
  left: 0;
  top: 0;
  z-index: 200;
  background-color: #fff;
  padding: 20px 0;
  box-sizing: border-box;
  transition: transform 0.3s ease-out;
  text-align: center;

  @media (min-width: 850px) {
    display: none;
  }

  ${props =>
    props.open &&
    css`
      transform: translateX(0);
    `}
`;
