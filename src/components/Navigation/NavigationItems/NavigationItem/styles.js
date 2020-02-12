import styled, { css } from "styled-components";

export const Item = styled.li`
  margin: 0;
  box-sizing: border-box;
  display: flex;
  height: 100%;
  align-items: center;
  transition: 0.3s;

  a {
    color: #eeeeee;
    text-decoration: none;
    height: 100%;
    padding: 16px 10px;
    border-bottom: 4px solid transparent;
    box-sizing: border-box;
    display: block;
  }

  &:hover {
    background-color: #393e46;
    border-bottom: 4px solid #ffda79;
  }

  ${props =>
    props.active &&
    css`
      background-color: #393e46;
      border-bottom: 4px solid #ffb142;
    `}

  @media (max-width: 850px) {
    a {
      color: #2e2e2e;
    }

    ${props =>
      props.active &&
      css`
        background-color: #eeeeee;
        border-right: 6px solid #ffb142;
        border-bottom: 0;
      `}

    &:hover {
      background-color: #eeeeee;
      border-right: 6px solid #ffda79;
      border-bottom: 0;
    }
  }
`;
