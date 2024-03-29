import styled from "styled-components";

export const Container = styled.div<{ color?: string }>`
  flex: 1;

  h4 {
    text-align: center;
    font-weight: bold;
    color: #888;
    margin-bottom: 5px;
  }
  h5 {
    text-align: center;
    font-weight: bold;
    color: ${(props) => props.color ?? "#000"};
  }
`;
