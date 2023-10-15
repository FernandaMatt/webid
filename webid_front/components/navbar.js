import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Navbar.module.css';

export default function Navbar () {
	return (
		<nav className={styles.navbar}>
			<Link href="/">
			<Image
				priority
				src="/webid_logos/webid_logo.01_branco_prancheta.png"
				height={72}
				width={219.41}
				alt="webid_logo.01_branco_prancheta.png"
				/>
			</Link>
			<ul>
				<li>
					<Link href="/auctions">
						Auctions
					</Link>
				</li>
				<li>
					<Link href="/create_new_auction">
						Create New Auction
					</Link>
				</li>
				<li>
					<Link href="/contact">
						Contact
					</Link>
				</li>
				<li>
					<Link href="/about">
						About
					</Link>
				</li>
			</ul>
		</nav>
	);
}
