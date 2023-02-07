import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { api } from "../../../services/api";
import { Customer } from "../../../services/hooks/useCustomers";

import { ButtonSubmit, LoginContainer, WrapperInput } from "./styles";
import { useNavigate, useParams } from "react-router-dom";
import { queryClient } from "../../../services/queryClient";
import { updateCustomer, useUpdateCustomerById } from "../../../services/hooks/useUpdateCustomerById";
import { useCustomerById } from "../../../services/hooks/useCustomerById";

const schema = yup.object({
  name: yup.string().required('O nome é obrigatório.'),
  birthDate: yup.string().required('A data de nascimento é obrigatória.'),
  cpf: yup.string().required('O CPF é obrigatório.'),
  phone: yup.string().required('O telefone é obrigatório.'),
  rg: yup.string().required('O RG é obrigatório.'),
}).required();

interface UpdateCustomer extends Omit<Customer, 'id'> { }

export function UpdateCustomer() {
  const { register, handleSubmit, formState: { errors } } = useForm<UpdateCustomer>({
    resolver: yupResolver(schema)
  });

  const navigate = useNavigate()
  
  let idParams: any 
  
  const { id } = useParams()

  if (id) {
    idParams = id
  }
  
  async function handleUpdateCustomer(customer: UpdateCustomer) {
    try {
      await updateCustomer(idParams, customer)

      navigate('/customers')
    } catch (error) {
      
    }
  }

  return (
    <LoginContainer>
      <h1>ATUALIZAR CLIENTE</h1>

      <form onSubmit={handleSubmit(handleUpdateCustomer)}>
        <div>
          <WrapperInput>
            <input
              {...register("name")}
              id="name"
              name="name"
              type="text"
              placeholder="Nome"
            />
            <label
              htmlFor="name"
            >Nome *</label>
            <p>{errors.name?.message}</p>
          </WrapperInput>

          <WrapperInput>
            <input
              {...register("birthDate")}
              id="birthDate"
              name="birthDate"
              type="date"
              placeholder="Data de nascimento"
            />
            <label
              htmlFor="birthDate"
            >Data de nascimento *</label>
            <p>{errors.birthDate?.message}</p>
          </WrapperInput>

          <WrapperInput>
            <input
              {...register("cpf")}
              id="cpf"
              name="cpf"
              type="text"
              placeholder="CPF"
            />
            <label
              htmlFor="name"
            >CPF *</label>
            <p>{errors.cpf?.message}</p>
          </WrapperInput>

          <WrapperInput>
            <input
              {...register("rg")}
              id="rg"
              name="rg"
              type="text"
              placeholder="RG"
            />
            <label
              htmlFor="rg"
            >RG *</label>
            <p>{errors.rg?.message}</p>
          </WrapperInput>

          <WrapperInput>
            <input
              {...register("phone")}
              id="phone"
              name="phone"
              type="text"
              placeholder="Telefone"
            />
            <label
              htmlFor="phone"
            >Telefone *</label>
            <p>{errors.phone?.message}</p>
          </WrapperInput>

          <ButtonSubmit type="submit">
            CONTINUAR
          </ButtonSubmit>
        </div>

        <hr />
      </form>
    </LoginContainer>
  )
}