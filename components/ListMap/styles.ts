import styled from "styled-components";

export const Container = styled.tr`
  button {
    display: inline-block;
    padding: 5px 10px;
    border: 0;
    outline: 0;
    border-radius: 5px;
    color: white;
    font-family: cursive;
    cursor: pointer;
    background-color: red;
  }
`;
export const ContainerColum = styled.td`
  padding: 10px 0px;
`;

export const Category = styled.div<{ color: string }>`
  display: inline-block;
  padding: 5px 10px;
  border-radius: 5px;
  color: white;
  background-color: ${(props) => props.color};
`;
export const Value = styled.div<{ color: string }>`
  color: ${(props) => props.color};
`;
