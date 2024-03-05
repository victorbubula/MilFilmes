import Button from 'components/Button';
import Logo from 'components/Logo';
import styles from './Add.module.scss';
import Footer from 'components/Footer';
import Input from './Input';
import { useState } from 'react';

export default function Add() {
	const [title, setTitle] = useState('');
	const [img, setImg] = useState('');
	
	/*async function lerArquivoJSON() {
		const resposta = await fetch('https://api.npoint.io/83dd26caf95c5aa77f11');
		const dados = await resposta.json();
		return dados;
	}
		
	// Função para modificar o arquivo JSON
	async function modificarArquivoJSON(novoTitulo:string) {
		// Lê o arquivo JSON
		const dados = await lerArquivoJSON();
		
		// Modifica o valor da idade
		dados.title = novoTitulo;
		
		// Salva as alterações de volta no arquivo JSON
		const resposta = await fetch('https://api.npoint.io/83dd26caf95c5aa77f11', {
			method: 'PUSH', // Pode variar dependendo do servidor
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(dados)
		});
		
		// Se desejar, você pode verificar a resposta do servidor
		console.log(resposta);
	}*/
		
	const onSave = (event:any) => {
		event.preventDefault();
		//modificarArquivoJSON(title);
		alert('filme adicionado com sucesso');
		setTitle('');
		setImg('');
	};

	return <div className={styles.background}>
		<header className={styles.header}><Logo/></header>
		<main>
			<form onSubmit={onSave}>
				<Input
					label="Titulo"
					placeholder="Insira o titulo do filme"
					onChange={value => setTitle(value)}
					value={title}
				/>
				<Input
					label="Capa"
					placeholder="Insira uma imagem"
					onChange={value => setImg(value)}
					value={img}
				/>
				
				<Button type='submit'>Adicionar</Button>
			</form>
		</main>
		<Footer/>
	</div>;
}