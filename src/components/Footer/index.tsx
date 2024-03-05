import Logo from 'components/Logo';
import styles from './Footer.module.scss';

export default function Footer() {
	return  <footer className={styles.footer}>
		<Logo/>
		<p>Feito por <a className={styles.link} href="https://github.com/victorbubba" target='_blank' rel="noreferrer">Victor Bubula</a> para uso pessoal.</p>
	</footer>;
}