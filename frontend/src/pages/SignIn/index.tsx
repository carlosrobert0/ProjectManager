import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { ButtonSubmit, LoginContainer, WrapperInput } from "./styles";
import { SignIn as S } from "phosphor-react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

interface FormData {
  username: string;
  password: string;
}

const schema = yup.object({
  username: yup.string().required('O login é obrigatório.'),
  password: yup.string().required('A senha é obrigatória.'),
}).required();

export function SignIn() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema)
  });

  const navigate = useNavigate()

  const { signIn } = useAuth()
  
  async function handleSign({ username, password }: FormData) {
    try {
      await signIn({username, password})

      navigate('/projects')
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <LoginContainer>
      <h1>FAZER LOGIN</h1>

      <form onSubmit={handleSubmit(handleSign)}>
        <WrapperInput>
          <input
            {...register("username")}
            id="username"
            name="username"
            type="text"
            placeholder="Digite seu username"
            autoFocus
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
            placeholder="Digite sua senha"
          />
          <label
            htmlFor="password"
          >Senha</label>
          <p>{errors.password?.message}</p>
        </WrapperInput>

        <ButtonSubmit type="submit">
          <S size={24} />
          ENTRAR
        </ButtonSubmit>
      </form>

      <span>
        Não tem uma conta ainda?
        <NavLink to="/register" title="Registrar agora" end>
          <a>Registrar agora</a>
        </NavLink>
      </span>
    </LoginContainer>
  )
}