import { FiSearch } from "react-icons/fi";

import {
  Container,
  DesktopContainer,
  Title,
  Button,
  SearchBox,
  SearchInput,
} from "./styles";

export function Header() {
  return (
    <Container>
      <DesktopContainer>
        <Title>RANKAA</Title>
        <Button>Organização</Button>
      </DesktopContainer>
      <SearchBox>
        <FiSearch />
        <SearchInput
          type="text"
          placeholder="Pesquise uma atlética, jogo ou modalidade"
        />
      </SearchBox>
    </Container>
  );
}
