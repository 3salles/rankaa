import styled from "styled-components";

export const Container = styled.section`
  padding: 0 2.25rem;
`

export const Title = styled.h2`
  font-family: Source Sans Pro;
  font-size: 1.125rem;
  line-height: 1.25rem;
  margin-bottom: 0.75rem;
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
