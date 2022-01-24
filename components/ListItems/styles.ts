import styled from "styled-components";

export const Container = styled.table`
  width: 100%;
  background-color: white;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 10px;
  margin-top: 20px;
  select {
    margin-top: 30px;
    font-family: cursive;
    background-color: white;
    outline: 0;
    border: 0;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
    padding: 7px;
    background-color: #222;
    color: white;
  }
`;
export const ContainerHeadColum = styled.th<{ width?: number }>`
  width: ${(props) => (props.width ? `${props.width}px` : "auto")};
  padding: 10px 0px;
  text-align: left;
`;
