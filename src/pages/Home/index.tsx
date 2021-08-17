import { useState } from "react";
import { ImLocation } from "react-icons/im";

import { Header } from "../../components/Header";
import {
  Container,
  Title,
  Section,
  Card,
  Infos,
  Tag,
  Location,
  Body,
  TeamLogo,
  TeamContainer,
  Date,
} from "./styles";

export function Home() {
  const [showLocation, setShowLocantion] = useState(false);

  function handleShowLocation() {
    setShowLocantion((prev) => !prev);
  }

  return (
    <>
      <Header />
      <Container>
        <section>
          <Title>Quartas de Finais</Title>
          <Section>  
            <Card>
              <Infos>
                <Tag>
                  <img
                    src="https://img.icons8.com/fluency/48/000000/football2.png"
                    alt="Bola de Futsal"
                  />
                  <span>Futsal</span>
                </Tag>
                <Location title="Localização" onClick={handleShowLocation}>
                  <ImLocation />
                  {showLocation && <span>UFMA - quadra externa</span>}
                </Location>
              </Infos>
              <Body>
                <TeamContainer>
                  <TeamLogo
                    src="https://img.icons8.com/color/48/000000/barcelona-fc.png"
                    alt="Brasão da Atlética"
                  />
                  <p>Atletica</p>
                </TeamContainer>
                <Date>
                  <p>20/07</p>
                  <span>13:15</span>
                </Date>
                <TeamContainer>
                  <TeamLogo
                    src="https://img.icons8.com/color/48/000000/chelsea-fc.png"
                    alt="Brasão da Atlética"
                  />
                  <p>Atletica</p>
                </TeamContainer>
              </Body>
            </Card>
          </Section>
        </section>
      </Container>
    </>
  );
}
