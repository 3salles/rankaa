import { IoIosArrowForward } from "react-icons/io";

import { CardGame } from "../../components/CardGame";
import { Header } from "../../components/Header";

import {
  Container,
  Title,
  Section,
  BackgroundSection,
  RightButton,
} from "./styles";

import games from "../../utils/games.json";
import { ResultCard } from "../../components/ResultCard";

export function Home() {
  return (
    <>
      <Header />
      <Container>
        <section className="section">
          <Title>Quartas de Finais</Title>
          <BackgroundSection>
            <Section>
              {games?.map((game) => (
                <CardGame key={game.id} game={game} />
              ))}
            </Section>
          </BackgroundSection>
        </section>
        <section className="section">
          <Title>
            <span>Resultados</span>
            <RightButton title="Ver mais resultados">
              <IoIosArrowForward />
            </RightButton>
          </Title>
          <ResultCard />
        </section>
      </Container>
    </>
  );
}
