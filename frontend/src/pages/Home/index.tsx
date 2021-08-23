import { IoIosArrowForward } from "react-icons/io";

import { CardGame } from "../../components/CardGame";
import { ResultCard } from "../../components/ResultCard";
import { Rank } from "../../components/Rank";


import {
  Container,
  Title,
  Section,
  BackgroundSection,
  Banner,
} from "./styles";

import games from "../../utils/games.json";
import athletics from "../../utils/athletics.json";

import { AppLayout } from "../../layouts/AppLayout";
import { RightButton } from "../../components/RightButton";

export function Home() {
  return (
    <AppLayout>
      <Container>
        <Banner>
          <img
            src="https://images.unsplash.com/photo-1561542313-b23c8ff631f9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80"
            alt="Olimpics"
          />
        </Banner>

        <div className="desktop">
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
              <RightButton />
            </Title>
            <div id="results">
              {games.map((game) => (
                <ResultCard key={game.id} game={game} />
              ))}
            </div>
          </section>
        </div>
        <section className="section">
          <Title>
            <span>Rank</span>
            <RightButton />
          </Title>
          <Rank athletics={athletics} />
        </section>
      </Container>
    </AppLayout>
  );
}
