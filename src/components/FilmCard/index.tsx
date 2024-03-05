import styles from './FilmCard.module.scss';

interface Props{
    title:string,
    photo:string,
    genders:string[]
}

export default function FilmCard({title, photo, genders}: Props) {
	return <div className={styles.card}>
		<img src={photo} alt={title} className={styles.poster}/>
		<div className={styles.info}>
			<h1 className={styles.name}>{title}</h1>
			<ul>
				<li>{genders[0]}</li>
			</ul>
		</div>
	</div>;
}