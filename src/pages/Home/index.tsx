import { CardGame } from "../../components/CardGame";
import { Header } from "../../components/Header";
import { Container, Title, Section, BackgroundSection } from "./styles";
import games from "../../utils/games.json";

export function Home() {
  return (
    <>
      <Header />
      <Container>
        <section>
          <Title>Quartas de Finais</Title>
          <BackgroundSection>
            <Section>
              {games?.map((game) => (
                <CardGame key={game.id} game={game} />
              ))}
            </Section>
          </BackgroundSection>
        </section>
      </Container>
    </>
  );
}
