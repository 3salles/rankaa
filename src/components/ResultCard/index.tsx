import { Container, Content, TeamLogo, Result, Sport } from "./styles";

import { GameData } from '../CardGame/index';

interface ResultCardProps {
  game: GameData;
}

export function ResultCard( { game }: ResultCardProps) {
  return (
    <Container>
      <Content>
        <TeamLogo
          src={game?.opponents[0]?.avatar}
          alt={`Brasão ${game?.opponents[0]?.name}`}
        />
        <Result>
          <div>
            <p>{game?.opponents[0]?.name}</p>
            <span>{game?.opponents[0]?.score}</span>
          </div>
          <div>
            <p>vs</p>
            <span>-</span>
          </div>
          <div>
            <p>{game?.opponents[1]?.name}</p>
            <span>{game?.opponents[1]?.score}</span>
          </div>
        </Result>
        <TeamLogo
          src={game?.opponents[1]?.avatar}
          alt={`Brasão ${game?.opponents[1]?.name}`}
        />
      </Content>
      <Sport title={game?.sport?.name}>
        <img
          src={game?.sport?.logo}
          alt={game?.sport?.name}
        />
      </Sport>
    </Container>
  );
}
