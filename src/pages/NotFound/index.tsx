import styles from './NotFound.module.scss';

export default function NotFound() {
    return(
        <div className={styles.container}>
            <img src="assets/not_found.png" alt="pagina nao encontrada" />
        </div>
    );
}