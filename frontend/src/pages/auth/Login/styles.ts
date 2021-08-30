import styled from "styled-components";

export const Container = styled.section`
  height: 100vh;
  position: relative;
  padding: 1rem;
`

export const Card = styled.article`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 40px;
  background: rgba(255, 255, 255, 0.2);
  border: 3px solid rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(20px);
  border-radius: 10px;
  filter: drop-shadow(0px 8px 5px rgba(0, 0, 0, 0.8));

  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const Header = styled.header`
  font-size: 24px;
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 32px;
`

export const EmailInput = styled.div`
  background: rgba(255, 255, 255, 0.2);
  border: 3px solid rgba(255, 255, 255, 0.4);
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 8px 12px;
  
  
  > input {
    background: transparent;
    border: 0;
    flex: 1;
    margin-left: 0.5rem;
    outline: 0;
    color: #FFF;

    &::placeholder{
      color: white;
    }
  }

  > svg {
    width: 20px;
    height: 20px;
    color: #FFF;
  }
`

export const PasswordInput = styled.div`
  background: rgba(255, 255, 255, 0.2);
  border: 3px solid rgba(255, 255, 255, 0.4);
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 8px 12px;
  
  
  > input {
    background: transparent;
    border: 0;
    flex: 1;
    margin-left: 0.5rem;
    outline: 0;
    color: #FFF;

    &::placeholder{
      color: white;
    }
  }

  svg {
    width: 20px;
    height: 20px;
    color: #FFF;
  }

  > button {
    color: #FFF;
    background: 0;

  }
`

export const Footer = styled.footer`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  font-size: 16px;
  color: #FFF;

  > p {
    text-align: center;
  }

  button {
    background: linear-gradient(90deg, #F4A58A 0%, #ED6B4E 84.05%);
    border-radius: 4px;
    height: 50px;
    font-weight: 600;
    color: #FFF;
    text-transform: uppercase;
    font-size: 1.5rem;
  }
`