import styled from "styled-components";

export const Container = styled.article`
  display: flex;
  align-items: center;
  
  &:nth-child(even){
    display: none;
  }
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #2B2B3D;
  padding: 1rem;
  border-radius: 16px 0px 0px 16px;
  gap: 1rem;
`

export const TeamLogo = styled.img`
  width: 36px;
  height: 36px;
  filter: drop-shadow(0 0 3px gray);
`

export const Result = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  color: var(--text);
  font-size: 1rem;
  min-width: 11.25rem;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;

    > span {
      margin-top: 0.5rem;
      font-weight: 600;
    }
  }
`

export const Sport = styled.div`
  background: #222232;
  border-radius: 0px 16px 16px 0px;
  display: flex;
  align-items: center;
  padding: 1.2rem;

  > img {
    width: 32px;
    height: 32px;
  }
`