import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

import { ResultCard } from "../../components/ResultCard";
import { SportsCarousel } from "../../components/SportsCarousel";
import { AppLayout } from "../../layouts/AppLayout";

import games from "../../utils/games.json";

import {
  Container,
  LogoContainer,
  Logo,
  Title,
  SocialMedias,
  Card,
  CardContainer,
  Column,
  SocialName,
  ResultSection,
  Subtitle,
} from "./styles";

export function Athletic() {
  return (
    <AppLayout>
      <Container>
        <LogoContainer>
          <Logo src="https://img.icons8.com/color/96/000000/barcelona-fc.png" />
          <Title>Barcelona</Title>
          <Subtitle>Ciência e Tecnologia</Subtitle>
        </LogoContainer>

        <SocialMedias>
          <Card id="card">
            <h2> Redes Sociais</h2>
            <CardContainer>
              <Column>
                <SocialName>
                  <FaTwitter />
                  <p>@barcelona</p>
                </SocialName>
                <SocialName>
                  <FiMail />
                  <p>barcelona@mail.com</p>
                </SocialName>
              </Column>
              <Column>
                <SocialName>
                  <FaInstagram />
                  <p>@barcelona</p>
                </SocialName>
                <SocialName>
                  <FaFacebook />
                  <p>@barcelona</p>
                </SocialName>
              </Column>
            </CardContainer>
          </Card>
        </SocialMedias>
        <article>
          <h2>Modalidades</h2>
          <SportsCarousel />
        </article>

        <article>
          <h2>Resultados</h2>
          <ResultSection>
            {games.map((game) => (
              <ResultCard key={game.id} game={game} />
            ))}
          </ResultSection>
        </article>
      </Container>
    </AppLayout>
  );
}
