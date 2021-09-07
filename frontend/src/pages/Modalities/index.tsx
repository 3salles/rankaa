import { AppLayout } from "../../layouts/AppLayout";

import { Rank } from "../../components/Rank";
import { ResultCard } from "../../components/ResultCard";
import { RightButton } from "../../components/RightButton";
import { CardGame } from "../../components/CardGame";

import { Container, Title, BackgroundSection, Section, SportButtonsContainer } from "./styles";

import games from "../../utils/games.json";
import athletics from "../../utils/athletics.json";
import { SportsCarousel } from "../../components/SportsCarousel";


export function Modalities() {
  return (
    <AppLayout >
      <SportButtonsContainer>
      <SportsCarousel />
      </SportButtonsContainer>
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
            <RightButton />
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
            <RightButton />
          </Title>
          <Rank athletics={athletics} />
        </section>
      </Container>
    </AppLayout>
  );
}
