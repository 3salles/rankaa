import styled from "styled-components";


export const Card = styled.section`
  padding: 0.75rem 1rem;
  background: var(--card-color);
  border-radius: 4px;
`

export const Infos = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`

export const Tag = styled.div`
  background: white;
  border-radius: 12px;
  padding: 0.25rem 0.375rem;
  display: flex;
  align-items: center;

  > span {
    color: black;
    font-weight: 600;
    font-size: 0.75rem;
  }

  > img {
    width: 16px;
    height: 16px;
    margin-right: 0.5rem;
  }
`

export const Location = styled.button`
  background: 0;
  position: relative;
  display: flex;
  flex-direction: column;

  > svg {
    color: #F4A58A;

    &:hover {
      opacity: 0.9;
    }
  }

  > span {
    position: absolute;
    left: -130px;
    background: white;
    padding: 0.5rem;
    top: 25px;
    font-size: 0.75rem;
    width: 150px;
    border-radius: 4px;
    z-index: 9999;
  }
`

export const Body = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`
export const TeamContainer = styled.div`
  font-size: 14px;
  color: var(--text);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`

export const TeamLogo = styled.img`
  width: 36px;
  height: 36px;
  filter: drop-shadow(0 0 3px gray);
`

export const Date = styled.div`
  color: var(--text);
  font-size: 0.75rem;

  > span {
    font-weight: 700;
  }
`