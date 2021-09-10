import styled from "styled-components";

export const Container = styled.button`
  background: 0;
  color: white;

  > svg {
    width: 20px;
    height: 20px;
  }

  @media(min-width: 768px){
    display: none;
  }
`