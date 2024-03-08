import FilmCard from 'components/FilmCard';
import styles from './Genders.module.scss';

interface Props {
	film: {
		title: string;
		photo: string;
		gender: string[];
		id: number;
	}[],
	name: string
}

export default function Gender({ film, name }: Props) {

	return (
		(film.length > 0) ? <section className={styles.films}>
			<h1 className={styles.gender}>{name}</h1>
			<div className={styles.container}>
				{film.map(item => (
					<FilmCard
						title={item.title}
						photo={item.photo}
						genders={item.gender}
						key={item.id}
					/>
				))}
			</div>
		</section>
			: null
	);
}