import { CardList } from "../../../components/CardList";
import { AppLayout } from "../../../layouts/AppLayout";

import { Container, Header, Button } from "./styles";

import athletics from "../../../utils/athletics.json";

export function AthleticList() {
  return (
    <AppLayout isAdmin>
      <Container>
        <Header>
          <h1>Atléticas</h1>
          <Button>Nova Atlética</Button>
        </Header>
        <article>
          {athletics.map((athletic) => (
            <CardList key={athletic.id} athletic={athletic} />
          ))}
        </article>
      </Container>
    </AppLayout>
  );
}
