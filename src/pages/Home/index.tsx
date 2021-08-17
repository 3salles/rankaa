import { CardGame } from "../../components/CardGame";
import { Header } from "../../components/Header";
import { Container, Title, Section } from "./styles";

export function Home() {
  return (
    <>
      <Header />
      <Container>
        <section>
          <Title>Quartas de Finais</Title>
          <Section>
            <CardGame />
          </Section>
        </section>
      </Container>
    </>
  );
}
