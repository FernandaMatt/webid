import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

import AuctionCard from '../components/auctionCards';

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
			<div>
				<h1 className={styles.auction}>Auctions </h1>
				</div>
				<div className={styles.grid}>
					<AuctionCard source="/apto.jpg" title="Copacabana Apartment" description="Charming, sunlit space with beach views. Comfy furnishings, well-equipped kitchen. Tranquil bedroom with en-suite. Private balcony. Ideal city retreat." />
					<AuctionCard source="/bmw.jpg" title="BMW 2022 - Blue" description="Sleek blue finish, 503 HP, 3.0L twin-turbo. Luxurious leather interior, tech-packed. Low mileage, meticulously maintained. Own the thrill. Bid now!" />
					<AuctionCard source="/webid.jpg" title="Webid - T-shirt" description="The million-dollars shirt" />
				</div>
			</div>

		</div>
	);
}
