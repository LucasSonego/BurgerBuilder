import styled from "styled-components";

export const StyledButton = styled.button`
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  font: inherit;
  padding: 10px 10px 10px 0;
  margin: 5px 10px 0 0;
  font-weight: bold;
  color: ${props => props.color};
`;
