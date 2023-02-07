import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { api } from "../../../services/api";
import { ButtonSubmit, LoginContainer, WrapperInput } from "./styles";
import { useNavigate } from "react-router-dom";
import { CheckCircle, Spinner } from "phosphor-react";
import { useState } from "react";
import { Project } from "../@types";

const schema = yup.object({
  title: yup.string().required('O nome é obrigatório.'),
  zip_code: yup.string().required('A data de nascimento é obrigatória.'),
  cost: yup.number().required('O CPF é obrigatório.'),
  done: yup.boolean().required('O telefone é obrigatório.'),
  deadline: yup.string().required('O RG é obrigatório.'),
}).required();

export function CreateProject() {
  const { register, handleSubmit, formState: { errors } } = useForm<Project>({
    resolver: yupResolver(schema)
  });
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  async function handleCreateProject(project: Project) {
    try {
      setIsLoading(true)
      
      await api.post("/projects")
      navigate('/projects')
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <LoginContainer>
      <h1>CRIAR PROJETO</h1>

      <form onSubmit={handleSubmit(handleCreateProject)}>
        <div>
          <WrapperInput>
            <input
              {...register("title")}
              id="title"
              name="title"
              type="text"
              placeholder="Titulo"
            />
            <label
              htmlFor="title"
            >Titulo *</label>
            <p>{errors.title?.message}</p>
          </WrapperInput>

          <WrapperInput>
            <input
              {...register("cost")}
              id="cost"
              name="cost"
              type="text"
              placeholder="Custo"
            />
            <label
              htmlFor="cost"
            >Custo *</label>
            <p>{errors.cost?.message}</p>
          </WrapperInput>
          

          <WrapperInput>
            <input
              {...register("deadline")}
              id="deadline"
              name="deadline"
              type="date"
              placeholder="Prazo"
            />
            <label
              htmlFor="deadline"
            >Prazo *</label>
            <p>{errors.deadline?.message}</p>
          </WrapperInput>

          <WrapperInput>
            <CheckCircle
              {...register("done")}
              id="deaddoneline"
              name="done"
              type="date"
            />
            <label
              htmlFor="deadline"
            >Pronto *</label>
            <p>{errors.done?.message}</p>
          </WrapperInput>
          
          <ButtonSubmit type="submit">
            { isLoading ? <Spinner size={24} /> : "CONTINUAR" }
          </ButtonSubmit>
        </div>
      </form>
    </LoginContainer>
  )
}