import styled from "styled-components";

export const Items = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
  height: 100%;

  @media (max-width: 850px) {
    display: block;
    width: 100%;
  }
`;
