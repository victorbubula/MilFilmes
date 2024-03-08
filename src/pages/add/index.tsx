import Button from 'components/Button';
import { ReactComponent as Logo} from 'assets/logo.svg';
import styles from './Add.module.scss';
import Footer from 'components/Footer';
import Input from './Input';
import { useState } from 'react';

export default function Add() {
	const [title, setTitle] = useState('');
	const [img, setImg] = useState('');
	
	return <div className={styles.background}>
		<header className={styles.header}>
			<Logo/>
			<h1 className={styles.title}>Adicionar um filme ou série</h1>	
		</header>
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
		<Footer/>
	</div>;
}