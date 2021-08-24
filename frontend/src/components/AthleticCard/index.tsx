import { IoIosArrowForward } from "react-icons/io";
import { Container, TeamLogo, TeamName, Button } from './styles'

export function AthleticCard() {
  return (
    <Container>
      <TeamLogo
        src="https://img.icons8.com/color/50/000000/barcelona-fc.png"
        alt="Barcelona"
      />
      <TeamName>Barcelona</TeamName>
      <Button>
        <p>Visualizar</p>
        <IoIosArrowForward />
      </Button>
    </Container>
  );
}
