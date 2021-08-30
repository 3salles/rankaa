import { useState } from "react";
import { BsLockFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { FaEye, FaEyeSlash, FaUser } from "react-icons/fa";

import { Container, Card, Header, Input, PasswordInput, Footer } from './styles'

export function Register () {
  const [showPassword, setShowPassword] = useState(false)

  function handleShowPassword() {
    setShowPassword((prev) => !prev);
  }

  return (
    <Container>
      <Card >
      <Header>
        <h1>Cadastro</h1>
      </Header>
      <Input>
        <FaUser />
        <input type="text" placeholder="Nome" />
      </Input>
      <p>Erros</p>
      <Input>
        <GrMail />
        <input type="text" placeholder="Email" />
      </Input>
      <p>Erros</p>
      <PasswordInput>
        <BsLockFill />
        <input type={showPassword ? 'text' : 'password'} placeholder="Senha" />
        <button onClick={handleShowPassword}>
          {showPassword ?  <FaEyeSlash /> : <FaEye />}
        </button>
      </PasswordInput>
      <p>Erros</p>
      <Footer>
        <button>Cadastrar</button>
        <p>Já possui conta? <a href="/auth/signin">Faça login</a></p>
      </Footer>
      </Card>
    </Container>
  )
}