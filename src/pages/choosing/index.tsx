import Button from 'components/Button';
import styles from './Choosing.module.scss';

export default function Choosing() {
	return <div className={styles.background}>
		<h1 className={styles.title}>Sortar um filme ou série</h1>
		<main className={styles.main}>
			<Button>Sortear</Button>
		</main>
	</div>;
}