import styled from "styled-components";

export const Container = styled.header`
  padding: 20px 36px;
`

export const DesktopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`

export const Title = styled.h1`
  color: var(--text);
`

export const Button = styled.button`
  height: 40px;
  color: #FFF;
  padding: 10px 16px;
  text-transform: uppercase;
  background: linear-gradient(90deg, #F4A58A 0%, #ED6B4E 84.05%);
  border-radius: 4px;
`

export const SearchBox = styled.div`
  width: 100%;
  border: 1px solid #FFFFFF;
  border-radius: 4px;
  display: flex;
  align-items: center;
  padding-left: 4px;

  > svg {
    color: white;
    height: 18px;
    width: 18px;
  }
`

export const SearchInput = styled.input`
  width: 100%;
  padding: 4px 8px;
  color: #FFF;
  background: 0;
  border: 0;
  outline: 0;

  &::placeholder{
    color: #FFF;
    opacity: 0.8;
  }
`