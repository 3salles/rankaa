import styled from "styled-components";

export const Container = styled.section`
  padding: 0 2.25rem 6.5rem;

  > article {
    > h2 {
      margin: 1rem 0;
    }
  }
`

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
`

export const Logo = styled.img`
  width: 96px;
  height: 96px;
  filter: drop-shadow(0 0 3px gray);
`

export const Title = styled.h1`
  font-family: Source Sans Pro;
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 1.875rem;
`

export const SocialMedias = styled.article`
  background: rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  width: 100%;
  padding: 24px;
  margin-bottom: 1.5rem;
`

export const Card = styled.div`
  text-align: center;
`

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
`
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;
`

export const SocialName = styled.div`
  display: flex;
  align-items: center;
  color: #FFF;
  font-size: 0.875rem;
  
  > p {
    margin-left: 0.5rem;
  }

  > svg {
    width: 20px;
    height: 20px;
  }
`

export const ResultSection = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`