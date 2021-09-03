import { AppLayout } from "../../../layouts/AppLayout";

import {
  Container,
  Header,
  Section,
  Form,
  Input,
  Buttons,
  SaveButton,
  CancelButton
} from "./styles";

export function NewAthletic() {
  return (
    <AppLayout isAdmin>
      <Container>
        <Header>
          <h1>Nova Atlética</h1>
        </Header>
        <Form>
          <Section>
            <label>Logo</label>
          </Section>
          <Section>
            <label>Nome</label>
            <Input type="text" placeholder="Digite o nome da Atlética" />
          </Section>
          <Section>
            <label>Curso</label>
            <Input type="text" placeholder="Digite o curso" />
          </Section>
          <Section>
            <label>Email</label>
            <Input type="text" placeholder="Ex.: exemplo@mail.com" />
          </Section>
          <Section>
            <label>Instagram</label>
            <Input type="text" placeholder="Ex.: @atletica" />
          </Section>
          <Section>
            <label>Twitter</label>
            <Input type="text" placeholder="Ex.: @atletica" />
          </Section>
          <Section>
            <label>Facebook</label>
            <Input type="text" placeholder="Ex.: @atletica" />
          </Section>
          <Buttons>
            <CancelButton>Cancelar</CancelButton>
            <SaveButton>Salvar</SaveButton>
          </Buttons>
        </Form>
      </Container>
    </AppLayout>
  );
}
