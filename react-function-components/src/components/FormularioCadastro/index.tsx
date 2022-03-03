import React from 'react';
import Button from '@mui/material/Button';

export default function FormularioCadastro() {
	return (
		<form>
			<label htmlFor="">Nome</label>
			<input type="text" name="" id="" />

			<label htmlFor="">Sobrenome</label>
			<input type="text" name="" id="" />

			<label htmlFor="">CPF</label>
			<input type="text" name="" id="" />

			<label htmlFor="">Promoções</label>
			<input type="checkbox" name="" id="" />

			<label htmlFor="">Novidades</label>
			<input type="checkbox" name="" id="" />

			<Button type="submit" variant="contained">
				Cadastrar
			</Button>
		</form>
	);
}
