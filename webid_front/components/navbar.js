import React, { useState, useEffect } from "react";
import { useWindowSize } from "@uidotdev/usehooks";
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Navbar.module.css';
import menuIcon from '../public/menu-icon-white.png';



export default function Navbar ()
{

	const [menuOpen, setMenuOpen] = useState(false);
	const size = useWindowSize();

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	}

	const closeMenu = () => {
		setMenuOpen(false);
	}

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

			{size.width > 1002 && (
			<ul>
				<li>
				<Link href="/">
						Home
					</Link>
				</li>
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
			</ul>)}
			{/* SmallerScreens*/}
			{menuOpen && size.width <= 1002 && (
			<div className={styles.mobileMenu}>
				<div className={styles.closeButton} onClick={closeMenu}>
					{/*Close button (X)*/}
					<span>&times;</span>
				</div>
				<ul className={`${styles.link_items}`}>
				<li>
				<Link href="/">
						Home
					</Link>
				</li>
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
			</div>
			)}
			
			{/*Renderiza o ícone de menu apenas em telas menores que 1002px */}
			{!menuOpen && size.width <= 1002 && (
				<div className={styles.menuIcon} onClick={toggleMenu}>
          			<Image src={menuIcon} alt="Menu Icon" width={50} height={2} className="white-icon"/>
				</div>
			)}
		</nav>
	);
}
