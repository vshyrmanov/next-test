import React from 'react';
import Link from 'next/link';
import styles from '../../../styles/buttons.module.scss';

const bg = {
	dark: "homeButtonDark",
	light: "homeButtonLight"
}

const HomeButton = ({type, link, children}) => {
	return (
		<>
			<Link href={`${link}`} className={styles.btnLink}>
				<button className={styles[bg[type]]}>
					{children}
				</button>
			</Link>
		</>
	);
};

export default HomeButton;