import Head from 'next/head';
import AuctionCard from '../components/auctionCards';

import styles from '../styles/LoanConfirmed.module.css';

export default function RentConfirmation() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Confirmation</title>
				<link rel="icon" href="/webid_logos/webid_favicon.ico" />
			</Head>

			<main>
				<div>
					<h1>Confirm your auction data</h1>
				</div>
				<div className={styles.grid}>
					<div >
						<AuctionCard source="/apto.jpg" title="Copacabana Apartment" description="Charming, sunlit space with beach views. Comfy furnishings, well-equipped kitchen. Tranquil bedroom with en-suite. Private balcony. Ideal city retreat." />
					</div>
					<div className={styles.card} >
						<p>
							Your are creating a <span>Sale</span> Contract Type.
						</p>
						<button>Create your Auction!</button>

					</div>

				</div>
			</main>
		</div>
	);
}
