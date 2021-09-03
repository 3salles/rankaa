import { MdModeEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Athletic } from "../Rank";

import { Container, Team, ButtonsAction } from "./styles";

interface Sport {
  id: number;
  name: string;
  icon: string;
}

interface CardListProps {
  athletic?: Athletic;
  sport?: Sport;
  isSport?: boolean;
}

export function CardList({ athletic, sport, isSport }: CardListProps) {
  return (
    <Container>
      <Team>
        <img
          src={athletic?.logo || sport?.icon}
          alt={athletic?.name || sport?.name}
        />
        <p>{athletic?.name || sport?.name}</p>
      </Team>
      {!isSport && (
        <ButtonsAction>
          <button>
            <MdModeEdit />
          </button>
          <button>
            <RiDeleteBin6Line />
          </button>
        </ButtonsAction>
      )}
    </Container>
  );
}
