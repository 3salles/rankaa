import { IoHomeSharp } from "react-icons/io5";
import { GiWhistle, GiAttachedShield } from "react-icons/gi";
import { BsBarChartFill } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";

import { useHistory, useLocation } from "react-router-dom";

import { Container, Button } from "./styles";

const options = [
  { id: 0, icon: <IoHomeSharp />, name: "Início", route: "/" },
  { id: 1, icon: <GiWhistle />, name: "Modalidades", route: "/modalities" },
  { id: 2, icon: <GiAttachedShield />, name: "Atléticas", route: "/athletics" },
  { id: 3, icon: <BsBarChartFill />, name: "Jogos", route: "/games" },
];

const adminOptions = [
  {
    id: 0,
    icon: <GiAttachedShield />,
    name: "Atléticas",
    route: "/admin/athletics",
    create_route: "/admin/athletics/new",
  },
  {
    id: 1,
    icon: <GiWhistle />,
    name: "Modalidades",
    route: "/admin/modalities",
    create_route: "/admin/modalities",
  },

  {
    id: 2,
    icon: <BsBarChartFill />,
    name: "Jogos",
    route: "/admin/games",
    create_route: "/admin/games/new",
  },
  { id: 3, icon: <FiLogOut />, name: "Sair", route: "/" },
];

interface ReducedNavProps {
  isAdmin?: boolean;
}

export function ReducedNav({ isAdmin }: ReducedNavProps) {
  const history = useHistory();
  const location = useLocation();

  function handleOnClick(selectedId: number) {
    if (isAdmin) {
      history.push(adminOptions[selectedId].route);
    } else {
      history.push(options[selectedId].route);
    }
  }

  return (
    <Container>
      {isAdmin
        ? adminOptions.map((option) => (
            <Button
              key={option.id}
              selected={
                option.route === location.pathname ||
                option.create_route === location.pathname
              }
              onClick={() => handleOnClick(option.id)}
            >
              {option.icon}
              <p>{option.name}</p>
            </Button>
          ))
        : options.map((option) => (
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
