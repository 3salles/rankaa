import { useState } from "react";
import { ImLocation } from "react-icons/im";

import {
  Card,
  Infos,
  Tag,
  Location,
  Body,
  TeamContainer,
  TeamLogo,
  Date,
} from "./styles";

interface Opponents {
  id: number;
  name: string;
  avatar: string;
  score: number;
}

interface Sport {
  name: string;
  logo: string;
}
export interface GameData {
  id: number;
  sport: Sport;
  location: string;
  opponents: Opponents[];
  date: string;
  time: string;
}

interface CardGameProps {
  game: GameData;
}

export function CardGame({ game }: CardGameProps) {
  const [showLocation, setShowLocation] = useState(false);

  function handleShowLocation() {
    setShowLocation((prev) => !prev);
  }
  return (
    <Card>
      <Infos>
        <Tag>
          {/* TODO: Add other sports icons */}
          <img
            src={game?.sport?.logo}
            alt={`ícone de ${game?.sport?.name}`}
          />
          <span>{game?.sport?.name}</span>
        </Tag>
        <Location title="Localização" onClick={handleShowLocation}>
          <ImLocation />
          {showLocation && <span>{game?.location}</span>}
        </Location>
      </Infos>
      <Body>
        <TeamContainer>
          <TeamLogo
            src={game?.opponents[0]?.avatar}
            alt={game?.opponents[0]?.name}
          />
          <p>{game?.opponents[0]?.name}</p>
        </TeamContainer>
        <Date>
          <p>{game?.date}</p>
          <span>{game?.time}</span>
        </Date>
        <TeamContainer>
          <TeamLogo
            src={game?.opponents[1]?.avatar}
            alt={game?.opponents[1]?.name}
          />
          <p>{game?.opponents[1]?.name}</p>
        </TeamContainer>
      </Body>
    </Card>
  );
}
