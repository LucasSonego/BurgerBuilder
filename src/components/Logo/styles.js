import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  padding: 8px;
  height: ${props => props.size};
  box-sizing: border-box;
  border-radius: 5px;
`;

export const Img = styled.img`
  margin: 2px 0 0 0;
  height: 80%;
`;
