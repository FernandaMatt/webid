import Head from 'next/head';

import RentForm from '../components/rentForm';

import styles from '../styles/LoanContract.module.css';

export default function RentContract() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Rent Contract</title>
				<link rel="icon" href="/webid_logos/webid_favicon.ico" />
			</Head>

			<main>
				<div>
					<h1>You are creating a Rent Contract</h1>
					<p>Read the instructions carefully.</p>
				</div>
				<div className={styles.form}>
					<RentForm />
				</div>
			</main>
		</div>
	);
}
