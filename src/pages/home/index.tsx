import SearchBar from './SearchBar';
import Header from './Header';
import {Link} from 'react-router-dom';
import Footer from 'components/Footer';
import Gender from './Genders';
import filmes from 'data/filmes.json';
import generos from 'data/generos.json';
import styles from './Home.module.scss';

export default function Home() {
	return (
		<div className={styles.background}>
			<Header/>
			<section className={styles.container_sortear}>
				<SearchBar/>
				<h1>Não consegue decidir?</h1>
				<Link className={styles.button} to='/sortear'>Sortear</Link>
			</section>
			<main> 
				{generos.map(gender => <Gender
					key={gender.name}
					name={gender.name}
					film={filmes.filter(film => film.gender.includes(gender.name))}
				/>)}
			</main>
			<Footer/>
		</div>
	);
}
