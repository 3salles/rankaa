import { AthleticCard } from "../../components/AthleticCard";
import { AppLayout } from "../../layouts/AppLayout";

import { Container, Amount, List } from './styles'

export function Athletics () {
  return (
    <AppLayout>
      <Container>
      <Amount>Inscritas: <strong>10</strong> </Amount>
      <List>
        <AthleticCard />
        <AthleticCard />
        <AthleticCard />
      </List>
      </Container>
    </AppLayout>
  )
}