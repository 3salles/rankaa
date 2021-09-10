import styled from "styled-components";

interface ButtonProps {
  selected?: boolean;
}

export const Container = styled.section`
  margin-bottom: 1.5rem;

  > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    overflow-x: scroll;
  }
  &::-webkit-scrollbar {
    background: 0;
  }
`;

export const Button = styled.button<ButtonProps>`
  background: ${({ selected }) =>
    selected
      ? "linear-gradient(137.49deg, #F4A58A 0%, #ED6B4E 96.01%)"
      : "#222232"};
  padding: 1rem 1.5rem;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  font-family: Source Sans Pro;
  font-weight: 600;
  font-size: 1.125rem;
  line-height: 1.4375rem;
  color: white;

  > img {
    width: 32px;
    height: 32px;
  }
`;
