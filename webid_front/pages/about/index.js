import Head from 'next/head';
import Image from 'next/image';
import styles from '../../styles/About.module.css';

export default function About() {
	return (
		<div>
			<Head>
				<title>About</title>
				<link rel="icon" href="/webid_logos/webid_favicon.ico" />
			</Head>

			<main>
				<div className={styles.container}>
					<div className={styles.leftcontainer}>
					<div className={styles.title}>
						<div className={styles.spacing1}></div>
						<h1> About Us</h1>
					</div>
					<div class={styles.spacing2}>
					</div>
					<div className={styles.text}>
						<h2> weBid is a platform that provides accessible, simple, and secure peer-to-peer financial solutions, with a focus on the tokenized asset market. The core idea behind weBid is to eliminate intermediaries and democratize access to a diverse range of financial solutions.
						<br></br>
						The platform fosters an environment where investors can directly interact with one another, bypassing the need for traditional intermediaries. Leveraging blockchain technology, the platform ensures security, transparency, and automation across various processes, including loans, financing, and asset auctions.
						</h2>
						<div class={styles.spacing3}>
						</div>
					</div>
					</div>
					<div className={styles.rightcontainer}>
						<Image
						src="/team_webid.jpeg"
						alt="Description of the image"
						width={3000} // Set the desired width
						height={2000} // Set the desired height
						/>
					</div>
				</div>
			</main>
		</div>
	);
}
