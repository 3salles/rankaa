import styled, { css } from "styled-components";

interface ButtonProps {
  selected: boolean;
}

export const Container = styled.aside`
  left: 0;
  height: 100%;
  display: none;
`

export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  flex-direction: column;
  background: 0;
  color: white;
  gap: 0.5rem;

  > svg {
    width: 24px;
    height: 24px;
  }

  > p {
    font-family: Source Sans Pro;
    font-size: 18px;
  }

  ${({selected}) => selected && css`
    background: #2C2C3E;
    padding: 10px;
    border-radius: 4px;

    > p {
      font-weight: 600;
    }
  `}
`