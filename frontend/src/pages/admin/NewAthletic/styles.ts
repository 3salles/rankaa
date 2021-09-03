import styled from 'styled-components'

export const Container = styled.section`
  padding: 0 2.25rem;
  margin-bottom: 110px;
`

export const Header = styled.header`
  font-size: 1.125rem;
  color: white;
  text-align: center;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const Section = styled.div`
  font-size: 1rem;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  > label {
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  button {
    background: 0;
    color: white;
  }

  svg {
    width: 16px;
    height: 16px;
  }
`

export const Input = styled.input`
  background: 0;
  border: 1px solid white;
  padding: 0.2rem 0.3rem;
  color: white;
`

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const SaveButton = styled.button`
  height: 40px;
  color: #FFF;
  padding: 10px 16px;
  text-transform: uppercase;
  background: linear-gradient(90deg, #F4A58A 0%, #ED6B4E 84.05%);
  border-radius: 4px;
`

export const CancelButton = styled.button`
  height: 40px;
  color: #FFF;
  padding: 10px 16px;
  text-transform: uppercase;
  background: 0;
  border-radius: 4px;
  border: 1px solid #F4A58A;
  color: #F4A58A;
`