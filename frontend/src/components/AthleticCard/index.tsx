import { IoIosArrowForward } from "react-icons/io";
import { Athletic } from "../Rank";
import { Container, TeamLogo, TeamName, Button } from "./styles";

interface AthleticCardProps {
  athletic: Athletic;
}

export function AthleticCard({ athletic }: AthleticCardProps) {
  return (
    <Container>
      <TeamLogo
        src={athletic.logo}
        alt={athletic.name}
      />
      <TeamName>{athletic.name}</TeamName>
      <Button>
        <p>Visualizar</p>
        <IoIosArrowForward />
      </Button>
    </Container>
  );
}
