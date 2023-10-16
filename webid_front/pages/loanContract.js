import Head from 'next/head';

import LoanForm from '../components/loanForm';

import styles from '../styles/LoanContract.module.css';

export default function LoanContract() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Loan Contract</title>
				<link rel="icon" href="/webid_logos/webid_favicon.ico" />
			</Head>

			<main>
				<div>
					<h1>You are creating a Loan Contract</h1>
					<p>Read the instructions carefully.</p>
				</div>
				<div className={styles.form}>
					<LoanForm />
				</div>
			</main>
		</div>
	);
}
