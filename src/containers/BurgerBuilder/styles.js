import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto min-content;
  grid-template-rows: min-content;
  grid-template-areas: "controls burger";
  justify-content: center;
`;

export const Controls = styled.div`
  grid-area: controls;
`;
