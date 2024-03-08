import { ReactComponent as Logo } from 'assets/logo.svg';
import Navbar from './Navbar';
import styles from './DefaultPage.module.scss';
import { Outlet } from 'react-router-dom';

export default function Header() {
	return (
		<>
			<header className={styles.header}>
				<Logo />
				<Navbar />
			</header>
			<div>
				<Outlet />
			</div>
		</>

	);
}