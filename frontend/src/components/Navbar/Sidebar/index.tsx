import { useHistory, useLocation } from "react-router-dom";

import { Container, Button } from './styles'

const options = [
  { id: 0, name: "Início", route: "/" },
  { id: 1,  name: "Modalidades", route: "/modalities" },
  { id: 2,  name: "Atléticas", route: "/athletics" },
  { id: 3,  name: "Jogos", route: "/games" },
];

export function Sidebar () {
  const history = useHistory();
  const location = useLocation();

  function handleOnClick(selectedId: number) {
    history.push(options[selectedId].route);
  }

  return (
    <Container>
      {options.map((option) => (
        <Button key={option.id}
        selected={option.route === location.pathname}
        onClick={() => handleOnClick(option.id)}>
          {option.name}
        </Button>
      ))}
    </Container>
  )
}