import { IoHomeSharp } from "react-icons/io5";
import { GiWhistle, GiAttachedShield } from "react-icons/gi";
import { BsBarChartFill } from "react-icons/bs";

import { useHistory, useLocation } from "react-router-dom";

import { Container, Button } from "./styles";

const options = [
  { id: 0, icon: <IoHomeSharp />, name: "Início", route: "/" },
  { id: 1, icon: <GiWhistle />, name: "Modalidades", route: "/modalities" },
  { id: 2, icon: <GiAttachedShield />, name: "Atléticas", route: "/athletics" },
  { id: 3, icon: <BsBarChartFill />, name: "Jogos", route: "/games" },
];

export function Navbar() {
  const history = useHistory();
  const location = useLocation();

  function handleOnClick(selectedId: number) {
    history.push(options[selectedId].route);
  }

  return (
    <Container>
      {options.map((option) => (
        <Button
          key={option.id}
          selected={option.route === location.pathname}
          onClick={() => handleOnClick(option.id)}
        >
          {option.icon}
          <p>{option.name}</p>
        </Button>
      ))}
    </Container>
  );
}
