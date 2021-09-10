import { MdModeEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GameData } from "../CardGame";

import {
  Container,
  Team,
  TeamContainer,
  Sport,
  ButtonsAction,
  SportContainer,
  DateContainer,
} from "./styles";

interface GameCardListProps {
  game: GameData;
}

export function GameCardList({ game }: GameCardListProps) {
  return (
    <Container>
      <SportContainer>
        <Sport
          src={game?.sport?.logo}
          alt={game?.sport?.name}
        />
        <DateContainer>
          <p>{game?.date}</p>
          <span>{game?.time}</span>
        </DateContainer>
      </SportContainer>
      <TeamContainer>
        <Team
          src={game?.opponents[0]?.avatar}
          alt={game?.opponents[0]?.name}
        />
        <span>X</span>
        <Team
          src={game?.opponents[1]?.avatar}
          alt={game?.opponents[1]?.name}
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
