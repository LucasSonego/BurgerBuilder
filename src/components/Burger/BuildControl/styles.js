import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 400px;
  margin: 10px;
  padding: 10px;
  margin: 5px;
  border-radius: 5px;
  background-image: linear-gradient(120deg, #f7f1e3, #d1ccc0);
  text-align: center;
  align-items: center;
  justify-content: space-between;
  color: #2e2e2e;
`;

export const Label = styled.h3`
  float: left;
  vertical-align: center;
  margin: 5px;
  align-self: center;
`;

export const ControlButton = styled.button`
  background-image: ${props => props.background};
  margin: 5px;
  padding: 5px 10px;
  border: none;
  outline: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 3px;
`;
