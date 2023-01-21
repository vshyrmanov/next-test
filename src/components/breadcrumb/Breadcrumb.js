import React from 'react';
import Link from 'next/link';
import { AiOutlineHome } from 'react-icons/ai';
import styles from '../../../styles/breadcrumbs.module.scss';

const Breadcrumb = ({ linksArray = [] }) => {
	const links = [{url: '/', name: "Домой"}]
	return (
		<div className={styles.breadcrumb}>
			{[...links, ...linksArray].map((link, linkIndex) =>
				<Link href={`${link.url}`} key={linkIndex}>
					{linkIndex !== 0 &&	<span>/</span>}
					{linkIndex === 0 && <AiOutlineHome />}
					<span>{`${link.name}`}</span>
				</Link>
			)}
		</div>
	);
};

export default Breadcrumb;