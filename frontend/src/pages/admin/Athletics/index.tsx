import { CardList } from "../../../components/CardList";
import { AppLayout } from "../../../layouts/AppLayout";

import { Container, Header} from "./styles";

export function AthleticList() {
  return (
    <AppLayout isAdmin>
      <Container>
        <Header>
          <h1>Atléticas</h1>
        </Header>
        <article>
          <CardList />
          <CardList />
        </article>
      </Container>
    </AppLayout>
  );
}
