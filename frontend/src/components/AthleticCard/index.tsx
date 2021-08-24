import { IoIosArrowForward } from "react-icons/io";
import { Container } from './styles'

export function AthleticCard() {
  return (
    <Container>
      <img
        src="https://img.icons8.com/color/50/000000/barcelona-fc.png"
        alt="Barcelona"
      />
      <p>Barcelona</p>
      <button>
        <p>Visualizar</p>
        <IoIosArrowForward />
      </button>
    </Container>
  );
}
