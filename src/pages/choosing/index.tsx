import Button from 'components/Button';
import Footer from 'components/Footer';
import { ReactComponent as Logo} from 'assets/logo.svg';
import styles from './Choosing.module.scss';

export default function Choosing() {
	return <div className={styles.background}>
		<header className={styles.header}>
			<Logo/>
			<h1 className={styles.title}>Sortar um filme ou série</h1>
		</header>
		<main className={styles.main}>
			<Button>Sortear</Button>
		</main>
		<Footer/>
	</div>;
}