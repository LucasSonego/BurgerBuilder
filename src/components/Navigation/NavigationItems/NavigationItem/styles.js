import styled, { css } from "styled-components";

export const Item = styled.li`
  margin: 0;
  box-sizing: border-box;
  display: flex;
  height: 100%;
  align-items: center;

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
`;
