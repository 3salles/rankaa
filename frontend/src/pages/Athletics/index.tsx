import { AthleticCard } from "../../components/AthleticCard";
import { AppLayout } from "../../layouts/AppLayout";

import { Container } from './styles'

export function Athletics () {
  return (
    <AppLayout>
      <Container>
      <div>Inscritas: 10</div>
      <div>
        <AthleticCard />
      </div>
      </Container>
    </AppLayout>
  )
}