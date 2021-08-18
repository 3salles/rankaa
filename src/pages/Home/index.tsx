import { IoIosArrowForward } from "react-icons/io";

import { CardGame } from "../../components/CardGame";
import { ResultCard } from "../../components/ResultCard";
import { Rank } from "../../components/Rank";
import { Header } from "../../components/Header";

import {
  Container,
  Title,
  Section,
  BackgroundSection,
  RightButton,
} from "./styles";

import games from "../../utils/games.json";
import athletics from "../../utils/athletics.json";
import { Navbar } from "../../components/Navbar";

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
          <div id="results">
            {games.map((game) => (
              <ResultCard key={game.id} game={game} />
            ))}
          </div>
        </section>
        <section className="section">
          <Title>
            <span>Rank</span>
            <RightButton title="Ver rank completo">
              <IoIosArrowForward />
            </RightButton>
          </Title>
          <Rank athletics={athletics} />
        </section>
      </Container>
      <Navbar />
    </>
  );
}
