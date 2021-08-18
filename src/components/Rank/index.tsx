import { useState } from 'react';
import { Container, TeamLogo, TeamContainer } from './styles'

interface Athletic {
  id: number;
  name: string;
  logo: string;
  points: number;
}

interface RankProps {
  athletics: Athletic[];
}

export function Rank({athletics}: RankProps) {
  const [score, setScore] = useState(0);

  return (
    <Container>
      <thead>
        <tr>
          <th>#</th>
          <th>Atlética</th>
          <th>Pontuação</th>
        </tr>
      </thead>
      <tbody>
        {athletics.map((athletic) => (
          <tr key={athletic.id}>
          <td>{athletic.id + 1}</td>
          <TeamContainer>
            <TeamLogo
              src={athletic?.logo}
              alt={athletic?.name}
            />
            <p>{athletic?.name}</p>
          </TeamContainer>
          <td>{athletic?.points}</td>
        </tr>
        ))}
        
      </tbody>
    </Container>
  );
}
