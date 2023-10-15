import Head from 'next/head';

import SaleForm
 from '../components/saleForm';
import styles from '../styles/LoanContract.module.css';

export default function SaleContract() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Sale Contract</title>
				<link rel="icon" href="/webid_logos/webid_favicon.ico" />
			</Head>

			<main>
				<div>
					<h1>You are creating a Sale Contract</h1>
					<p>Read the instructions carefully.</p>
				</div>
				<div className={styles.form}>
					<SaleForm />
				</div>
			</main>
		</div>
	);
}
