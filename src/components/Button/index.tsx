import styles from './Button.module.scss';

export default function Button({children, type = 'button'}: {children?:string, type?: 'submit' | 'reset' | 'button' | undefined}) {
	return <button className={styles.button} type={type}>{children}</button>;
}