import styled from "styled-components";

export const Container = styled.section`
  padding: 0 2.25rem 8rem;
`

export const Amount = styled.p`
  color: white;
  text-align: right;
  font-family: Source Sans Pro;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.25rem;
  margin-bottom: 1rem;

  > span {
    font-weight: 600;
  }
`

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`