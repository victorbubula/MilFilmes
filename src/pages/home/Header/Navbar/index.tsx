import styles from './Navbar.module.scss';

export default function Navbar() {
	return (
		<nav className={styles.navbar}>
			<a href="#" target='_self'>Home</a>
			<a href="#" target='_self'>Assistidos</a>
			<a href="#" target='_self'>Filmes</a>
			<a href="#" target='_self'>Series</a>
		</nav>
	);
}