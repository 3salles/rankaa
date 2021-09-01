import styled from "styled-components";

export const Container = styled.section`
  padding: 0 2.25rem;
`

export const Header = styled.header`
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`

export const CardList = styled.div`
  padding: 8px;
  border: 1px solid white;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Team = styled.div`
  display: flex;
  align-items: center;

  > img {
    width: 36px;
    height: 36px;
    filter: drop-shadow(0 0 3px gray);
    margin-right: 1rem;
  }

  > p {
    font-family: Source Sans Pro;
    font-size: 1.125rem;
    color: white;
  }
`

export const ButtonsAction = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  > button {
    background: 0;
  }

  svg {
    color: white;
    width: 18px;
    height: 18px;
  }
`