import styles from './NotFound.module.scss';
import { ReactComponent as NotFoundImage } from 'assets/not_found.svg';

export default function NotFound() {
	return (
		<div className={styles.container}>
			<NotFoundImage/>
			<h1>Página não encontrada</h1>
		</div>
	);
}