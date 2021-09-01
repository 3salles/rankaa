import { AthleticCard } from "../../components/AthleticCard";
import { AppLayout } from "../../layouts/AppLayout";

import { Container, Amount, List } from './styles'

import athletics from '../../utils/athletics.json'

export function Athletics () {
  return (
    <AppLayout role='user'>
      <Container>
      <Amount>Inscritas: <strong>{athletics.length}</strong> </Amount>
      <List>
        {athletics?.map((athletic) => (
          <AthleticCard key={athletic.id} athletic={athletic} />
        ))}
      </List>
      </Container>
    </AppLayout>
  )
}