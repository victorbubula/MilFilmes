import Logo from 'components/Logo';
import Button from 'components/Button';
import Navbar from './Navbar';
import styles from './Header.module.scss';

export default function Header() {
	return <header className={styles.header}>
		<div>
			<Logo/>
			<Navbar/>
		</div>
		<Button>Adicionar</Button>
	</header>;
}