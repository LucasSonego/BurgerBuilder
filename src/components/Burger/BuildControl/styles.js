import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 400px;
  margin: 10px;
  padding: 10px;
  margin: 5px;
  border-radius: 5px;
  background: #bdc3c7;
  text-align: center;
  align-items: center;
  justify-content: space-between;
`;

export const Label = styled.h3`
  float: left;
  vertical-align: center;
  margin: 5px;
  align-self: center;
`;

export const AddButton = styled.button`
  background: #f1c40f;
  margin: 5px;
  padding: 5px 10px;
  border: none;
  outline: none;
  font-weight: bold;
  cursor: pointer;
`;

export const RemoveButton = styled.button`
  background: #e67e22;
  margin: 5px;
  padding: 5px 10px;
  border: none;
  outline: none;
  font-weight: bold;
  cursor: pointer;
`;
