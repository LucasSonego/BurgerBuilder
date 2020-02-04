import styled, { css } from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 15%;
  left: 30%;
  z-index: 500;
  background-color: white;
  border-radius: 10px;
  box-shadow: 1px 1px 1px black;
  padding: 16px;
  box-sizing: border-box;
  transition: all 0.3s ease-out;
  left: calc(50% - 250px);
  width: 500px;

  ${props =>
    !props.visible &&
    css`
      transform: translateY(-100vh);
      opacity: 0;
    `}

  @media (max-width: 550px) {
    width: 90%;
    margin: 30px;
  }
`;
