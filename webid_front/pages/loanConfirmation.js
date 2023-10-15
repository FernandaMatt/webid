import Head from 'next/head';
import AuctionCard from '../components/auctionCards';

import styles from '../styles/LoanConfirmed.module.css';

export default function LoanConfirmation() {
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
						<AuctionCard />
					</div>
					<div className={styles.card} >
						<p>
						Your are auctioning <span>20%</span> of the asset token <span>0x01573Df433484fCBe6325a0c6E051Dc62Ab107D1</span> in the modality <span>Loan Contract Type</span>. The monthly full rent for your property would be <span>1,000 dollars</span>. You'll need to pay proportional rent, starting at <span>20%</span> it will be <span>200 dollars</span> per month to the new owner. You will have the option to repurchase it after <span>365 days</span>.  The rent will decrease proportionally if you repurchase your tokens.
		The price for your loan is <span>200,000 dollars</span>, and the max interest rate is <span>10%</span>. The auction will last <span>75:00:00</span> and <span>the bidders will compete to offer the best interest rates.</span>
						</p>
						<button>Create your Auction!</button>

					</div>

				</div>
			</main>
		</div>
	);
}
