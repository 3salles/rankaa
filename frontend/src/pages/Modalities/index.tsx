import { CardGame } from "../../components/CardGame";
import { AppLayout } from "../../layouts/AppLayout";
import { Container, Title, BackgroundSection, Section } from "./styles/index";
import games from "../../utils/games.json";
import athletics from "../../utils/athletics.json";
import { Rank } from "../../components/Rank";
import { ResultCard } from "../../components/ResultCard";

export function Modalities() {
  return (
    <AppLayout>
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
            {/* <RightButton title="Ver rank completo">
              <IoIosArrowForward />
            </RightButton> */}
          </Title>
          <Rank athletics={athletics} />
        </section>
      </Container>
    </AppLayout>
  );
}
