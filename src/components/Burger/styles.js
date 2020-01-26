import styled from "styled-components";

export const BurgerDiv = styled.div`
  grid-area: burger;
  width: 100%;
  margin: 0 20px 0 40px;
  height: 250px;
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;

  @media (min-width: 500px) and (min-height: 400px) {
    width: 350px;
    height: 300px;
  }
`;
