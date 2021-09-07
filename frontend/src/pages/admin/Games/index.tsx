import { CardList } from "../../../components/CardList";
import { AppLayout } from "../../../layouts/AppLayout";
import {Container, Header, Button} from './styles'

import games from "../../../utils/games.json";
import { GameCardList } from "../../../components/GameListCard";
import { useHistory } from "react-router";

export function GamesList () {
  const history = useHistory()

  function handleOnRegister () {
    history.push('/admin/games/new')
  }

  return (
    <AppLayout isAdmin>
      <Container>
        <Header>
          <h1>Jogos</h1>
          <Button onClick={handleOnRegister}>Cadastrar</Button>
        </Header>
        <article>
          {games.map((game) => (
            <GameCardList key={game.id} game={game} />
          ))}
        </article>
      </Container>
    </AppLayout>
  )
}