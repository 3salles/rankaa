import { MdModeEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

import { Container, Team, ButtonsAction } from "./styles";

export function CardList() {
  return (
    <Container>
      <Team>
        <img
          src="https://img.icons8.com/color/50/000000/barcelona-fc.png"
          alt="Atlética"
        />
        <p>Atlética</p>
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
