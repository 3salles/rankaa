import { CardList } from "../../../components/CardList";
import { AppLayout } from "../../../layouts/AppLayout";
import {Container, Header, Button} from './styles'

import games from "../../../utils/games.json";
import { GameCardList } from "../../../components/GameListCard";

export function GamesList () {
  function handleOnRegister () {

  }
  return (
    <AppLayout isAdmin>
      <Container>
        <Header>
          <h1>Jogos</h1>
          <Button onClick={handleOnRegister}>Cadastrar</Button>
        </Header>
        <article>
          <GameCardList />
        </article>
      </Container>
    </AppLayout>
  )
}