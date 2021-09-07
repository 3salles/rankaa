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

interface NewGameFormData {
  modality: string;
  team1: string;
  team2: string;
  date: string;
  time: string;
  place: string;
}

const newGameFormSchema = yup.object().shape({
  // modalidade: yup.string().required("Modalidade obrigatória"),
  team1: yup.string().required("Oponente obrigatório"),
  team2: yup.string().required("Oponente obrigatório"),
  date: yup.string().required("Data obrigatória"),
  time: yup.string().required("Horário obrigatório"),
  place: yup.string().required("Local obrigatório"),
});

export function NewGame() {
  const history = useHistory();
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(newGameFormSchema),
    mode: "onChange",
  });
  const { errors, isDirty, isValid } = formState;

  function handleOnCancel() {
    history.push("/admin/athletics");
  }

  const handleCreateAthletic: SubmitHandler<NewGameFormData> = async (
    values
  ) => {
    console.log(values);
    // Add toastfy
  };

  return (
    <AppLayout isAdmin>
      <Container>
        <Header>
          <h1>Novo Jogo</h1>
        </Header>
        <Form onSubmit={handleSubmit(handleCreateAthletic)}>
          <Section>
            <label>
              Modalidade
            </label>

            <p>{errors?.name?.message}</p>
          </Section>
          <Section>
            <label>Oponente 1</label>
            <Input
              type="text"
              placeholder="Digite o oponente 1"
              {...register("team1")}
            />
            <p>{errors?.team1?.message}</p>
          </Section>
          <Section>
            <label>Oponente 2</label>
            <Input
              type="text"
              placeholder="Digite o oponente 2"
              {...register("team2")}
            />
            <p>{errors?.team2?.message}</p>
          </Section>
          <Section>
            <label>Dia</label>
            <Input
              type="text"
              placeholder="Digite a data"
              {...register("date")}
            />
            <p>{errors?.date?.message}</p>
          </Section>
          <Section>
            <label>Horário</label>
            <Input
              type="text"
              placeholder="Selecione o horário"
              {...register("time")}
            />
            <p>{errors?.time?.message}</p>
          </Section>
          <Section>
            <label>Local</label>
            <Input
              type="text"
              placeholder="Digite o local"
              {...register("place")}
            />
            <p>{errors?.place?.message}</p>
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
