import styled from "styled-components";

export const BurgerDiv = styled.div`
  grid-area: burger;
  width: 100%;
  margin: 10px;
  height: 250px;
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;
  width: 350px;
  height: 300px;

  @media (max-width: 850px) {
    overflow: scroll;
  }
`;
