import { Container, Button } from './styles'

import sports from '../../utils/sports.json'

export function SportsCarousel () {
  return (
    <Container>
      {sports?.map((sport) => (
        <Button key={sport.id} selected>
        <img src={sport.icon} alt={sport.name} />
        <p>{sport.name}</p>
      </Button>
      ))}
    </Container>
  )
}