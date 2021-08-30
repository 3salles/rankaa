import { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { BsLockFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { FaEye, FaEyeSlash, FaUser } from "react-icons/fa";

import {
  Container,
  Card,
  Header,
  Input,
  PasswordInput,
  Footer,
} from "./styles";

interface SignUpFormData {
  email: string;
  password: string;
}

const signUpFormSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup
    .string()
    .min(6, "No mínimo 6 caracteres")
    .required("Senha obrigatória"),
});

export function Register() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signUpFormSchema),
    mode: "onChange",
  });
  const { errors, isDirty, isValid } = formState;

  const [showPassword, setShowPassword] = useState(false);

  function handleShowPassword() {
    setShowPassword((prev) => !prev);
  }

  const handleSignIn: SubmitHandler<SignUpFormData> = async (values) => {
    console.log(values);
  };

  return (
    <Container>
      <Card onSubmit={handleSubmit(handleSignIn)}>
        <Header>
          <h1>Cadastro</h1>
        </Header>
        <Input>
          <FaUser />
          <input type="text" placeholder="Nome" {...register('name')} />
        </Input>
        <p>{errors?.name?.message}</p>
        <Input>
          <GrMail />
          <input type="text" placeholder="Seu email" {...register("email")} />
        </Input>
        <p>{errors?.email?.message}</p>
        <PasswordInput>
          <BsLockFill />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Senha"
            {...register("password")}
          />
          <button onClick={handleShowPassword}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </PasswordInput>
        <p>{errors?.password?.message}</p>
        <Footer>
          <button disabled={!isDirty || (isDirty && !isValid)}>
            Cadastrar
          </button>
          <p>
            Já possui conta? <a href="/auth/signin">Faça login</a>
          </p>
        </Footer>
      </Card>
    </Container>
  );
}
