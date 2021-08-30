import { BsLockFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

import {
  Container,
  Card,
  Header,
  EmailInput,
  PasswordInput,
  Footer,
} from "./styles";

export function Login() {
  const [showPassword, setShowPassword] = useState(false);

  function handleShowPassword() {
    setShowPassword((prev) => !prev);
  }

  return (
    <Container>
      <Card>
        <Header>
          <h1>Entrar</h1>
        </Header>
        <EmailInput>
          <GrMail />
          <input type="text" placeholder="Seu email" />
        </EmailInput>
        <PasswordInput>
          <BsLockFill />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Sua senha"
          />
          <button onClick={handleShowPassword}>
            {" "}
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </PasswordInput>
        <Footer>
          <button type="submit">Entrar</button>
          <p>
            Não possui conta? <a href="/auth/signup">Cadastre-se</a>
          </p>
        </Footer>
      </Card>
    </Container>
  );
}
