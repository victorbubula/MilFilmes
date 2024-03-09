import styles from './SearchBar.module.scss';

interface Props {
	onChange:(value: string)=> void
}

export default function SearchBar({onChange}:Props) {
	function onSearch(event:{ target: { value: React.SetStateAction<string>; }; }) {
		onChange(event.target.value.toString());
	}
	return <input className={styles.search} onChange={onSearch} placeholder="Pesquise um filme ou série" type="search"></input>;
}