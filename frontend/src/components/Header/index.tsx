import { FiSearch } from "react-icons/fi";
import { useHistory } from "react-router-dom";

import {
  Container,
  DesktopContainer,
  Title,
  Button,
  SearchBox,
  SearchInput,
} from "./styles";

interface HeaderProps {
  isAdmin?: boolean;
}

export function Header({ isAdmin }: HeaderProps) {
  const history = useHistory();

  function handleOnClick() {
    history.push("/auth/signin");
  }

  return (
    <Container>
      <DesktopContainer>
        <Title>RANKAA</Title>
        {!isAdmin && (
          <SearchBox>
            <FiSearch />
            <SearchInput
              type="text"
              placeholder="Pesquise uma atlética, jogo ou modalidade"
            />
          </SearchBox>
        )}
        {!isAdmin && <Button onClick={handleOnClick}>Organização</Button>}
      </DesktopContainer>
      {!isAdmin && (
        <div id="mobile">
          <SearchBox>
            <FiSearch />
            <SearchInput
              type="text"
              placeholder="Pesquise uma atlética, jogo ou modalidade"
            />
          </SearchBox>
        </div>
      )}
    </Container>
  );
}
