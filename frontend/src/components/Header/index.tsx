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


export function Header() {
  const history = useHistory()
  function handleOnClick() {
    history.push('/auth/signin');
  }
  return (
    <Container>
      <DesktopContainer>
        <Title>RANKAA</Title>
        <SearchBox>
          <FiSearch />
          <SearchInput
            type="text"
            placeholder="Pesquise uma atlética, jogo ou modalidade"
          />
        </SearchBox>
        <Button onClick={handleOnClick}>Organização</Button>
      </DesktopContainer>
      <div id="mobile">
        <SearchBox>
          <FiSearch />
          <SearchInput
            type="text"
            placeholder="Pesquise uma atlética, jogo ou modalidade"
          />
        </SearchBox>
      </div>
    </Container>
  );
}
