import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Webid</title>
				<link rel="icon" href="/webid_logos/webid_favicon.ico" />
			</Head>

			<main>
				<div className={styles.item-1}>
					<h1 className={styles.title}><span className={styles.titlecolor}>Webid</span> a secure platform for trading tokenized real assets.</h1>
					<p className={styles.description}>
					Seeking an investment opportunity? Explore our open auctions. Whether you need funding for a business project or for healthcare expenses, create your contract with us.
					</p>
				</div>
				<div className={styles.item-2}>
					<Image className={styles.gif}
						priority
						src="/webid_logos/logo_gif.01.gif"
						height={500}
						width={500}
						alt="logo_gif.01"
					/>
				</div>
			</main>
			<div>
				<h1>Auctions</h1>
			</div>

		</div>
	);
}
