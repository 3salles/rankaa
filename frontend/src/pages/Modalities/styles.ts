import styled from "styled-components";

export const SportButtonsContainer  = styled.div`
  padding: 0 3rem;  
`

export const Container = styled.section`
  padding: 0 2.25rem 8rem;

  .section {
    width: 100%;
  }

  .section + .section {
    margin-top: 2rem;
  }

  div + .section {
    margin-top: 2rem;
  }

  #results {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  @media(min-width: 768px){
    display: flex;
    gap: 4rem;

    .desktop {
      max-width: 50%;
    }

    #results {
      align-items: flex-start;
    }
  }
`

export const Title = styled.h2`
  font-family: Source Sans Pro;
  font-size: 1.125rem;
  line-height: 1.25rem;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const BackgroundSection = styled.article`
  border-radius: 16px;
  background: rgba(0, 0, 0, 0.3);
  padding: 1.25rem 1rem;
`

export const Section = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  overflow-x: auto;

  &::-webkit-scrollbar {
    background: 0;
  }
`
