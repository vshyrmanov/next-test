import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FiPhoneCall } from 'react-icons/fi';
import styles from '../../../styles/general.module.scss';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.footerContent}>
				<h3>Termo elasto plast</h3>
				<ul className={styles.socials}>
					<li><AiOutlineMail /></li>
					<li><FiPhoneCall /></li>
				</ul>
			</div>
			<div className={styles.footerBottom}>
				<p>Copyright all reserved 2022</p>
			</div>
		</footer>
	);
};

export default Footer;