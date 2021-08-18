import { Container, Content, TeamLogo, Result, Sport } from "./styles";

export function ResultCard() {
  return (
    <Container>
      <Content>
        <TeamLogo
          src="https://img.icons8.com/color/50/000000/barcelona-fc.png"
          alt=""
        />
        <Result>
          <div>
            <p>Atlética</p>
            <span>2</span>
          </div>
          <div>
            <p>vs</p>
            <span>-</span>
          </div>
          <div>
            <p>Atlética</p>
            <span>3</span>
          </div>
        </Result>
        <TeamLogo
          src="https://img.icons8.com/color/48/000000/chelsea-fc.png"
          alt=""
        />
        
      </Content>
      <Sport>
        <img
          src="https://img.icons8.com/emoji/48/000000/basketball-emoji.png"
          alt=""
        />
      </Sport>
    </Container>
  );
}
