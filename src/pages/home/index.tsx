import SearchBar from './SearchBar';
import Header from './Header';
import styles from './Home.module.scss';
import Button from 'components/Button';
import filmes from 'data/filmes.json';
import FilmCard from 'components/FilmCard';
import Footer from 'components/Footer';

export default function Home() {
	return (
		<div className={styles.background}>
			<Header/>
			<section className={styles.container_sortear}>
				<SearchBar/>
				<h1>Não consegue decidir?</h1>
				<Button>Sortear</Button>
			</section>
			<main> 
				<h1 className={styles.gender}>Ação</h1>
				<section className={styles.films}>
					{filmes.map(item => (
						<FilmCard 
							title={item.title}
							photo={item.photo}
							genders={item.gender}
							key={item.id}
						/>
					))}
				</section>
			</main>
			<Footer/>
		</div>
	);
}
