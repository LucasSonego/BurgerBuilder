import styled, { css } from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto min-content;
  grid-template-rows: min-content;
  grid-template-areas: "controls burger";
  justify-content: center;
  grid-gap: 20px;
  padding: 30px;
  @media (max-width: 850px) {
    width: 100%;
    display: inline-grid;
    justify-items: center;
    grid-template-columns: min-content;
    grid-template-rows: auto;
    grid-template-areas:
      "burger"
      "controls";
  }
  @media (max-width: 450px) {
    padding: 10px;
    width: auto;
  }
`;

export const Controls = styled.div`
  grid-area: controls;
  @media (max-width: 450px) {
    width: fit-content;
  }
`;

export const OrderButton = styled.button`
  background: #f39c12;
  color: #000;
  padding: 10px;
  font-weight: bold;
  border-radius: 5px;
  border: none;
  float: right;
  margin: 0 0 5px 0;

  &:disabled {
    color: #7f8c8d;
    background: #f1c57d;
  }
`;

export const Price = styled.h3`
  color: #000;
  margin: 5px;

  ${props =>
    props.disabled &&
    css`
      color: #7f8c8d;
      text-decoration: line-through;
    `}
`;
