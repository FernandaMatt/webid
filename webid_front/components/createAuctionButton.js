import styles from '../styles/Create.module.css';

const Button = ({ imageSrc, name, description }) => {
	return (
		<div className={styles.buttonGrid}>
			<div className={styles.buttonContainer}>
				<img src={imageSrc} alt={name} />
			</div>
			<div className={styles.buttomDescription}>
				<p>{description}</p>
			</div>
		</div>
  );
};

export default Button;
