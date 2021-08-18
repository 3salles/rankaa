import styled from "styled-components";

export const Container = styled.table`
  margin-top: 1rem;
  width: 100%;
  border-spacing: 0 0.5rem;
  background: var(--card-color);
  text-align: center;
  border-radius: 16px;

  th {
    color: var(--text);
    font-family: Source Sans Pro;
    font-weight: 700;
    padding: 1rem;
    line-height: 1.5rem;
    font-size: 1.125rem;
    border-bottom: 1px solid #181829;
  }

  td {
    padding: 1rem;
    font-size: 1rem;
    color: var(--text);
  }

  @media(min-width: 768px){
      text-align: left;
    }
`

export const TeamContainer = styled.td`
  display: flex;
  align-items: center;

  > p {
    font-weight: 600;
    margin-left: 1rem;
  }
`

export const TeamLogo = styled.img`
  width: 36px;
  height: 36px;
  filter: drop-shadow(0 0 3px gray);
`