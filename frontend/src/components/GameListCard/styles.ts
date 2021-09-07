import styled from "styled-components";

export const Container = styled.div`
  padding: 8px;
  border: 1px solid white;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const SportContainer = styled.div`
  display: flex;
  align-items: center;
`

export const Sport = styled.img`
  width: 36px;
  height: 36px;
  margin-right: 1rem;
`
export const DateContainer = styled.div`
  color: white;
  
  > p {
    font-weight: bold;
  }
`
export const TeamContainer = styled.div`
  display: flex;
  align-items: center;
  color: white;
  font-weight: bold;

  > span {
    margin: 0 1rem;
  }
`

export const Team = styled.img`
  width: 36px;
  height: 36px;
  filter: drop-shadow(0 0 3px gray);
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