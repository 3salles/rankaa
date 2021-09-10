import { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { BsLockFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import {
  Container,
  Card,
  Header,
  EmailInput,
  PasswordInput,
  Footer,
} from "./styles";
import { useHistory } from "react-router-dom";

interface SignInFormData {
  email: string;
  password: string;
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup.string().required("Senha obrigatória"),
});

export function Login() {
  const history = useHistory();

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema),
    mode: "onChange",
  });
  const { errors, isDirty, isValid } = formState;

  const [showPassword, setShowPassword] = useState(false);

  function handleShowPassword() {
    setShowPassword((prev) => !prev);
  }

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    console.log(values);
    history.push('/admin/athletics')
  };

  return (
    <Container>
      <Card onSubmit={handleSubmit(handleSignIn)}>
        <Header>
          <h1>Entrar</h1>
        </Header>
        <EmailInput>
          <GrMail />
          <input type="text" placeholder="E-mail" {...register("email")} />
        </EmailInput>
        <p>{errors?.email?.message}</p>
        <PasswordInput>
          <BsLockFill />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Sua senha"
            {...register("password")}
          />
          <button onClick={handleShowPassword}>
            {" "}
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </PasswordInput>
        <p>{errors?.password?.message}</p>
        <Footer>
          <button type="submit" disabled={!isDirty || (isDirty && !isValid)}>
            Entrar
          </button>
          <p>
            Não possui conta? <a href="/auth/signup">Cadastre-se</a>
          </p>
        </Footer>
      </Card>
    </Container>
  );
}
