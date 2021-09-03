import { useHistory } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";

import { AppLayout } from "../../../layouts/AppLayout";

import {
  Container,
  Header,
  Section,
  Form,
  Input,
  Buttons,
  SaveButton,
  CancelButton,
} from "./styles";

interface NewTeamFormData {
  logo: string;
  name: string;
  course: string;
  email: string;
  instagram: string;
  twitter: string;
  facebook: string;
}

const newTeamFormaSchema = yup.object().shape({
  logo: yup.string().required("Logo obrigatória"),
  name: yup.string().required("Nome da Atlética obrigatório"),
  course: yup.string().required("Nome do curso obrigatório"),
  email: yup.string().email("E-mail inválido"),
  instagram: yup.string(),
  twitter: yup.string(),
  facebook: yup.string(),
});

export function NewAthletic() {
  const history = useHistory();
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(newTeamFormaSchema),
    mode: "onChange",
  });
  const { errors, isDirty, isValid } = formState;

  function handleOnCancel() {
    history.push("/admin/athletics");
  }

  const handleCreateAthletic: SubmitHandler<NewTeamFormData> = async (
    values
  ) => {
    console.log(values);
    // Add toastfy
  };

  return (
    <AppLayout isAdmin>
      <Container>
        <Header>
          <h1>Nova Atlética</h1>
        </Header>
        <Form onSubmit={handleSubmit(handleCreateAthletic)}>
          <Section>
            <label>
              Logo
            </label>
            <Input
              type="text"
              placeholder="Cole aqui o link da logo"
              {...register("logo")}
            />
            <p>{errors?.name?.message}</p>
          </Section>
          <Section>
            <label>Nome</label>
            <Input
              type="text"
              placeholder="Digite o nome da Atlética"
              {...register("name")}
            />
            <p>{errors?.name?.message}</p>
          </Section>
          <Section>
            <label>Curso</label>
            <Input
              type="text"
              placeholder="Digite o curso"
              {...register("course")}
            />
            <p>{errors?.course?.message}</p>
          </Section>
          <Section>
            <label>Email</label>
            <Input
              type="text"
              placeholder="Ex.: exemplo@mail.com"
              {...register("email")}
            />
            <p>{errors?.email?.message}</p>
          </Section>
          <Section>
            <label>Instagram</label>
            <Input
              type="text"
              placeholder="Ex.: @atletica"
              {...register("instagram")}
            />
          </Section>
          <Section>
            <label>Twitter</label>
            <Input
              type="text"
              placeholder="Ex.: @atletica"
              {...register("twitter")}
            />
          </Section>
          <Section>
            <label>Facebook</label>
            <Input
              type="text"
              placeholder="Ex.: @atletica"
              {...register("facebook")}
            />
          </Section>
          <Buttons>
            <CancelButton onClick={handleOnCancel}>Cancelar</CancelButton>
            <SaveButton
              type="submit"
              disabled={!isDirty || (isDirty && !isValid)}
            >
              Salvar
            </SaveButton>
          </Buttons>
        </Form>
      </Container>
    </AppLayout>
  );
}
