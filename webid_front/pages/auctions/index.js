import Head from 'next/head';

import AuctionCard from '../../components/auctionCards';

import styles from '../../styles/Auctions.module.css'

export default function Auctions() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Auctions</title>
				<link rel="icon" href="/webid_logos/webid_favicon.ico" />
			</Head>

			<main>
				<div>
					<h1>Auctions </h1>
				</div>
				<div className={styles.grid}>
					<AuctionCard source="/apto.jpg" title="Copacabana Apartment" description="Charming, sunlit space with beach views. Comfy furnishings, well-equipped kitchen. Tranquil bedroom with en-suite. Private balcony. Ideal city retreat." />
					<AuctionCard source="/bmw.jpg" title="BMW 2022 - Blue" description="Sleek blue finish, 503 HP, 3.0L twin-turbo. Luxurious leather interior, tech-packed. Low mileage, meticulously maintained. Own the thrill. Bid now!" />
					<AuctionCard source="/webid.jpg" title="Webid - T-shirt" description="The million-dollars shirt" />
				</div>
			</main>
		</div>
	);
}
