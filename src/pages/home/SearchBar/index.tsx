import styles from './SearchBar.module.scss';

export default function SearchBar() {
	return <input className={styles.search} placeholder="Pesquise um filme ou série" type="search"></input>;
}