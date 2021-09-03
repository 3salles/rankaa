import { AppLayout } from "../../../layouts/AppLayout";
import { CardList } from "../../../components/CardList";

import { Container, Header, Button } from "./styles";

import sports from "../../../utils/sports.json";


export function ModalitiesList() {
  return (
    <AppLayout isAdmin>
      <Container>
        <Header>
          <h1>Modalidades</h1>
          {/* <Button>Cadastrar</Button> */}
        </Header>
        <article>
          {sports.map((sport) => (
            <CardList key={sport.id} sport={sport} />
          ))}
        </article>
      </Container>
    </AppLayout>
  );
}
