import { ReactComponent as Logo } from 'assets/logo.svg';
import Navbar from './Navbar';
import styles from './DefaultPage.module.scss';
import { Link, Outlet } from 'react-router-dom';

export default function Header() {
	return (
		<>
			<header className={styles.header}>
				<Logo />
				<Navbar />
				<Link className={styles.button} to='/add'>Adicionar</Link>
			</header>
			<div>
				<Outlet />
			</div>
		</>

	);
}