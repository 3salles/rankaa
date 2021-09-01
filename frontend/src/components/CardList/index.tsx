import { MdModeEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Athletic } from "../Rank";

import { Container, Team, ButtonsAction } from "./styles";

interface CardListProps {
  athletic: Athletic;
}

export function CardList({ athletic}: CardListProps) {
  return (
    <Container>
      <Team>
        <img
          src={athletic.logo}
          alt={athletic.name}
        />
        <p>{athletic.name}</p>
      </Team>
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
