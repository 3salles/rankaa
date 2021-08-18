import { Container, TeamLogo, TeamContainer } from './styles'

export function Rank() {
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
        {/* Colocar o map aqui */}
        <tr>
          <td>1</td>
          <TeamContainer>
            <TeamLogo
              src="https://img.icons8.com/color/48/000000/liverpool-fc.png"
              alt=""
            />
            <p>Atlética</p>
          </TeamContainer>
          <td>25</td>
        </tr>
      </tbody>
    </Container>
  );
}
