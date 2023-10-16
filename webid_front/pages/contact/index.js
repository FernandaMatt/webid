import Head from 'next/head';

import styles from '../../styles/Contact.module.css';

export default function Contact() {
	return (
		<div >
			<Head>
				<title>Contact</title>
				<link rel="icon" href="/webid_logos/webid_favicon.ico" />
			</Head>

			<main className={styles.container}>
				<div >
					<h1>Contact</h1>
					<p>
						Imagine a bank-free loan, with lower fees, using tokenized assets like real estate as collateral. weBid embodies the full potential of blockchain technology: secure, cost-effective transactions with no unnecessary intermediaries.
					</p>
				</div>
				<div>
					<button className={styles.button}>
						<a href="https://github.com/FernandaMatt/webid" target="_blank">GitHub</a>
					</button>
					<button className={styles.button}>
						<a href="https://twitter.com/weBid_Finance" target="_blank">Twitter</a>
					</button>
				</div>
			</main>
		</div>
	);
}
