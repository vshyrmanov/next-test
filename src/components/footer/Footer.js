import React from 'react';
import Link from 'next/link';
import { AiOutlineMail } from 'react-icons/ai';
import { FiPhoneCall } from 'react-icons/fi';
import styles from '../../../styles/general.module.scss';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.footerContent}>
				<h3>Termo elasto plast</h3>
				<ul className={styles.socials}>
					<li>
						<Link href="/contacts"><AiOutlineMail /></Link>
					</li>
					<li>
						<Link href="/contacts"><FiPhoneCall /></Link>
					</li>
				</ul>
			</div>
			<div className={styles.footerBottom}>
				<p>Copyright all reserved 2023</p>
			</div>
		</footer>
	);
};

export default Footer;