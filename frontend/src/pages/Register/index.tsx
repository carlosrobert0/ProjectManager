import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { ButtonSubmit, LoginContainer, WrapperInput } from "./styles";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { useState } from "react";

interface FormData {
  name: string;
  username: string;
  password: string;
  confirmPassword: string;
}

const schema = yup.object({
  name: yup.string().required('O nome é obrigatório.'),
  username: yup.string().required('O username é obrigatório.'),
  password: yup.string().required('A senha é obrigatória.'),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'As senhas não conferem.')
}).required();

export function Register() {
  const [isLoading, setIsLoading] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema)
  });

  const navigate = useNavigate()

  async function handleCreateUser({
    name,
    username,
    password,
    confirmPassword
  }: FormData) {
    setIsLoading(true);

    try {
      await api.post("/users", {
        name,
        username,
        password,
        confirmPassword
      })

      navigate("/")
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <LoginContainer>
      <h1>CRIAR CONTA</h1>

      <form onSubmit={handleSubmit(handleCreateUser)}>
        <WrapperInput>
          <input
            {...register("name")}
            id="name"
            name="name"
            type="text"
            placeholder="Nome"
            autoFocus
          />
          <label
            htmlFor="name"
          >Nome</label>
          <p>{errors.name?.message}</p>
        </WrapperInput>

        <WrapperInput>
          <input
            {...register("username")}
            id="username"
            name="username"
            type="text"
            placeholder="Username"
          />
          <label
            htmlFor="username"
          >Username</label>
          <p>{errors.username?.message}</p>
        </WrapperInput>

        <WrapperInput>
          <input
            {...register("password")}
            id="password"
            name="password"
            type="password"
            placeholder="Senha"
          />
          <label
            htmlFor="password"
          >Senha</label>
          <p>{errors.password?.message}</p>
        </WrapperInput>

        <WrapperInput>
          <input
            {...register("confirmPassword")}
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="Senha"
          />
          <label
            htmlFor="confirmPassword"
          >Confirmar senha</label>
          <p>{errors.confirmPassword?.message}</p>
        </WrapperInput>

        <ButtonSubmit type="submit">
          { isLoading ? 'CARREGANDO ... ' : 'CONTINUAR' }
        </ButtonSubmit>
      </form>
    </LoginContainer>
  )
}