import Button from 'components/Button';
import styles from './Add.module.scss';
import Input from './Input';
import { useState } from 'react';

export default function Add() {
	const [title, setTitle] = useState('');
	const [img, setImg] = useState('');
	
	return <div className={styles.background}>
		<h1 className={styles.title}>Adicionar um filme ou série</h1>	
		<main className={styles.main}>
			<form>
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
	</div>;
}