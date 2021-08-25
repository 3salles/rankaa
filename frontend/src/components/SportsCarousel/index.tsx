import { Container, Button } from "./styles";

import sports from "../../utils/sports.json";
import { useState } from "react";

export function SportsCarousel() {
  const [selected, setSelected] = useState(0);

  const handleOnClick = (selectedId: number) => {
    setSelected(selectedId);
  };

  return (
    <Container>
      <div>
      {sports?.map((sport) => (
        <Button
          key={sport.id}
          selected={selected === sport.id}
          onClick={() => handleOnClick(sport.id)}
        >
          <img src={sport.icon} alt={sport.name} />
          <p>{sport.name}</p>
        </Button>
      ))}
      </div>
    </Container>
  );
}
