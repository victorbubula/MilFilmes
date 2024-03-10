import styles from './NotFound.module.scss';
import { ReactComponent as NotFoundImage } from 'assets/not_found.svg';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
	const navigate = useNavigate();
	return (
		<div className={styles.container}>
			<button onClick={() => navigate(-1)}>
				{'< voltar'}
			</button>
			<NotFoundImage/>
			<h1>Página não encontrada</h1>
		</div>
	);
}