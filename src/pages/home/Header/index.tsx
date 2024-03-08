import { ReactComponent as Logo} from 'assets/logo.svg';
import Navbar from './Navbar';
import styles from './Header.module.scss';
import {Link} from 'react-router-dom';

export default function Header() {
	return <header className={styles.header}>
		<div>
			<Logo/>
			<Navbar/>
		</div>
		<Link className={styles.button} to='/add'>Adicionar</Link>
	</header>;
}