import styled from "styled-components";

export const Container = styled.div`
  background-color: white;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;

  input,
  select,
  button {
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
  input {
    &::placeholder {
      color: white;
    }
  }
`;
