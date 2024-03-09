import SearchBar from './SearchBar';
import {Link} from 'react-router-dom';
import Gender from './Genders';
import filmes from 'data/filmes.json';
import generos from 'data/generos.json';
import styles from './Home.module.scss';
import { useState } from 'react';

export default function Home() {
	const [films, setFilms] = useState(filmes);
	function filmSearch(value:string) {
		value.toLowerCase();
		setFilms(filmes.filter(film => film.title.toLowerCase().includes(value)));
	}
	function filterType(value:string) {
		setFilms(filmes.filter(film => film.type.includes(value)));
	}

	return (
		<div className={styles.background}>
			<SearchBar onChange={filmSearch}/>
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
