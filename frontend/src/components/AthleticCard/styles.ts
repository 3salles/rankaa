import styled from "styled-components";

export const Container = styled.div`
  background: #14274D;
  border-radius: 10px;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const TeamLogo = styled.img`
  width: 36px;
  height: 36px;
  filter: drop-shadow(0 0 3px gray);
`

export const TeamName = styled.p`
  color: white;
  font-size: 18px;
  line-height: 1.8125rem;
`

export const Button = styled.button`
  background: 0;
  display: flex;
  align-items: center;
  gap: 1rem;
  color: white;
  font-size: 0.875rem;
`