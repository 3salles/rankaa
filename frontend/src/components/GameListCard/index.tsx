import { MdModeEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

import {
  Container,
  Team,
  TeamContainer,
  Sport,
  ButtonsAction,
  SportContainer,
  DateContainer,
} from "./styles";

export function GameCardList() {
  return (
    <Container>
      <SportContainer>
        <Sport
          src="https://img.icons8.com/emoji/48/000000/basketball-emoji.png"
          alt="Modalidade"
        />
        <DateContainer>
          <p>22/07</p>
          <span>13:45</span>
        </DateContainer>
      </SportContainer>
      <TeamContainer>
        <Team
          src="https://img.icons8.com/color/50/000000/barcelona-fc.png"
          alt="Atlética 1"
        />
        <span>X</span>
        <Team
          src="https://img.icons8.com/color/48/000000/chelsea-fc.png"
          alt="Atlética 2"
        />
      </TeamContainer>
      <ButtonsAction>
        <button>
          <MdModeEdit />
        </button>
        <button>
          <RiDeleteBin6Line />
        </button>
      </ButtonsAction>
    </Container>
  );
}
