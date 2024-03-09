import SearchBar from './SearchBar';
import {Link} from 'react-router-dom';
import Gender from './Genders';
import filmes from 'data/filmes.json';
import generos from 'data/generos.json';
import styles from './Home.module.scss';

export default function Home() {
	const films = filmes;
	return (
		<div className={styles.background}>
			<SearchBar/>
			<section className={styles.container_sortear}>
				<h1>Não consegue decidir?</h1>
				<Link className={styles.button} to='/sortear'>Sortear</Link>
			</section>
			<main> 
				{generos.map(gender => <Gender
					key={gender.name}
					name={gender.name}
					film={films.filter(film => film.gender.includes(gender.name))}
				/>)}
			</main>
		</div>
	);
}
