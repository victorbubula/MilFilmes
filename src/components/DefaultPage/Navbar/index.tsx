import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';

export default function Navbar() {
	return (
		<nav className={styles.navbar}>
			<Link to='/'>Home</Link>
			<Link to='/'>Filmes</Link>
			<Link to='/'>Séries</Link>
			<Link to='/'>Assistidos</Link>
			<Link to='/sortear'>Sortear</Link>
		</nav>
	);
}