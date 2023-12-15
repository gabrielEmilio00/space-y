import React, { useState } from 'react';
import {
	DivForm,
	Ticket,
	Title,
	Subtitle,
	FormGroup,
	FormCheck,
	FormButton,
} from './styles';
import Button from '../Button';
import Loader from '../Loader';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const saveUserFormSchema = z.object({
	nome: z
		.string()
		.min(1, 'O nome é obrigatório')
		.transform((name) => {
			return name
				.trim()
				.split(' ')
				.map((word) => {
					return word[0].toLocaleUpperCase().concat(word.substring(1));
				})
				.join(' ');
		}),
	email: z
		.string()
		.min(1, 'O e-mail é obrigatório')
		.email('Formato de e-mail inválido'),
	telefone: z
		.string()
		.min(11, 'O telefone deve conter no mínimo 11 caracteres')
		.max(15, 'O telefone deve conter no máximo 15 caracteres'),
	checkbox: z.boolean(),
});

type SaveUserFormData = z.infer<typeof saveUserFormSchema>;

function Form() {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<SaveUserFormData>({
		resolver: zodResolver(saveUserFormSchema),
	});

	const [loader, setLoader] = useState<boolean>(false);

	async function saveUser(data: SaveUserFormData) {
		setLoader(true);

		await fetch('http://localhost:3030/user/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((res) => {
				setTimeout(() => {
					toast.success('Cadastro realizado com sucesso! \nBem vindo a bordo!');
					reset();
					setLoader(false);
				}, 2000);
			})
			.catch((err) => {
				toast.error(
					'Ocorreu um erro na tentativa de realizar o cadastro! Por favor, tente novamente.',
				);
				setLoader(false);
				console.error(err);
			});
	}

	return (
		<DivForm>
			<ToastContainer />
			<Ticket>
				<img src="./images/icon-ticket.svg" alt="Ticket de embarque" />
			</Ticket>
			<Title>Garanta sua vaga para a primeira viagem</Title>
			<Subtitle>
				Preencha os campos abaixo para entrar na lista de espera
			</Subtitle>

			<form onSubmit={handleSubmit(saveUser)}>
				<FormGroup>
					<label htmlFor="nome">Seu Nome</label>
					<input type="text" {...register('nome')} />
					{errors.nome && <span className="error">{errors.nome?.message}</span>}
				</FormGroup>
				<FormGroup>
					<label htmlFor="email">E-mail</label>
					<input type="email" {...register('email')} />
					{errors.email && (
						<span className="error">{errors.email?.message}</span>
					)}
				</FormGroup>
				<FormGroup>
					<label htmlFor="telefone">Telefone</label>
					<input type="text" {...register('telefone')} />
					{errors.telefone && (
						<span className="error">{errors.telefone?.message}</span>
					)}
				</FormGroup>
				<FormCheck>
					<input type="checkbox" id="checkbox" {...register('checkbox')} />
					<label htmlFor="checkbox">Concordo em receber comunicações</label>
				</FormCheck>
				<FormButton>
					<Button text="Garantir minha vaga" fullsize />
				</FormButton>
			</form>
			{loader ? <Loader /> : ''}
		</DivForm>
	);
}

export default Form;
