import Image from 'next/image';
import styles from '../styles/Footer.module.css';

export default function Footer () {
	return (
		<footer className={styles.footer}>
			<Image
				priority
				src="/webid_logos/webid_logo_vertical_azul.01_Prancheta.png"
				height={222}
				width={245}
				alt="webid_logo_vertical_azul.01_Prancheta"
			/>
			<hr></hr>
			<p>
				&copy; 2023 Webid. All Rights Reserverd.
			</p>
		</footer>
	);
}
