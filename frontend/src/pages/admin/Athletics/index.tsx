import { CardList } from "../../../components/CardList";
import { AppLayout } from "../../../layouts/AppLayout";

import { Container, Header, Button } from "./styles";

import athletics from "../../../utils/athletics.json";
import { useHistory } from "react-router-dom";

export function AthleticList() {
  const history = useHistory()

  function handleOnRegister() {
    history.push('/admin/athletics/new')
  }

  return (
    <AppLayout isAdmin>
      <Container>
        <Header>
          <h1>Atléticas</h1>
          <Button onClick={handleOnRegister}>Cadastrar</Button>
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
