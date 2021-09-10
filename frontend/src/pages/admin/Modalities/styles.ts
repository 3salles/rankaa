import styled from "styled-components";

export const Container = styled.section`
  padding: 0 2.25rem;
  margin-bottom: 120px;

  > article {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`

export const Header = styled.header`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Button = styled.button`
  height: 40px;
  color: #FFF;
  padding: 10px 16px;
  text-transform: uppercase;
  background: linear-gradient(90deg, #F4A58A 0%, #ED6B4E 84.05%);
  border-radius: 4px;
`