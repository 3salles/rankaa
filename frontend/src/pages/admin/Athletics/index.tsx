import { MdModeEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

import { AppLayout } from "../../../layouts/AppLayout";

import { Container, Header, CardList, Team, ButtonsAction } from "./styles";

export function AthleticList() {
  return (
    <AppLayout isAdmin>
      <Container>
        <Header>
          <h1>Atléticas</h1>
        </Header>
        <article>
          <CardList>
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
          </CardList>
        </article>
      </Container>
    </AppLayout>
  );
}
