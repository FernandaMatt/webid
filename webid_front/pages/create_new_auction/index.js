import Link from 'next/link';
import Head from 'next/head';

import Button from '../../components/createAuctionButton.js'

import styles from '../../styles/Create.module.css';

const buttonsData = [
	{
		imageSrc: '/loan.png',
		name: 'Loan',
		description: 'If you want to raise funds during a certain time and repurchase it later, create a Loan Contract Type.',
		link: '/loanContract',
	},
	{
		imageSrc: '/sale.png',
		name: 'Sale',
		description: 'If you want to sell your asset, select Sale Contract Type.',
		link: '/saleContract',
	},
	{
		imageSrc: '/rent.png',
		name: 'Rent',
		description: 'If you want to rent your asset for a period, select Rent Contract Type.',
		link: '/rentContract',
	},
  ];

export default function CreateNewAuctions() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Create New Auctions</title>
				<link rel="icon" href="/webid_logos/webid_favicon.ico" />
			</Head>

			<main>
				<div>
					<h1>Create your Auction</h1>
				</div>
				<div className={styles.buttonList}>
					{buttonsData.map((button, index) => (
						<Link href={button.link} key={index}>
							<Button
								imageSrc={button.imageSrc}
								name={button.name}
								description={button.description}
							/>
						</Link>
					))}
				</div>
			</main>
		</div>
	);
}
