import styled from "styled-components";

interface ButtonProps {
  selected?: boolean;
}

export const Container = styled.section`
  padding: 0 2.25rem;
  max-width: 340px;
  margin-bottom: 1.5rem;
  display: flex;
  gap: 1rem;
  overflow-x: auto;

  &::-webkit-scrollbar {
    background: 0;
  }
`;

export const Button = styled.button<ButtonProps>`
  background: ${({ selected }) =>
    selected
      ? "linear-gradient(137.49deg, #F4A58A 0%, #ED6B4E 96.01%)"
      : "#222232"};
  padding: 16px 24px;
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
`;
