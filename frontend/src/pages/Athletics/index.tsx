import { AthleticCard } from "../../components/AthleticCard";
import { AppLayout } from "../../layouts/AppLayout";

import { Container, Amount } from './styles'

export function Athletics () {
  return (
    <AppLayout>
      <Container>
      <Amount>Inscritas: <strong>10</strong> </Amount>
      <div>
        <AthleticCard />
      </div>
      </Container>
    </AppLayout>
  )
}